const FriendRequests = require('../models/friendRequests.model');
const User = require('../models/user.model');

exports.getFriend = async(req,res,next) =>{
  console.log('get friend first method works');
}

exports.getOnlineFriends = async (req,res,next)=>{

}

exports.getFriends = async(req,res,next) =>{
  FriendRequests.find({$and:[{type:process.env.REQUEST_TYPE_FRIEND}],
    $or:[{senderId:req.query.userid},{receiverId:req.query.userid}]})
    .then(docs=>{
      res.status(200).send(docs);
    })
    .catch(error=>{
      res.status(200).send(error);
    })
}

exports.getSentRequests=async(req,res,next)=>{
  let sentRequests = []
  await FriendRequests.find({senderId:`${req.query.userid}`,type:process.env.REQUEST_TYPE_SENT_RECEIVED})
    .then(docs=>{
      Promise.all(docs.map(async(doc)=>{
        return sentRequests.push(await getUser(doc.receiverId))
      })).then(()=>{
        res.status(200).send({status:1, sentRequests:sentRequests})
      })
    })
    .catch(error=>{
      console.log(error)
    })
}

const getUser = async (userId) => {
    const doc = await User.findById(userId,{password:0})
    return doc
}

exports.getReceivedRequests = async(req,res,next) =>{
  let recivedRequests = []
  console.error(req.query)
  await FriendRequests.find({receiverId:`${req.query.userid}`,type:process.env.REQUEST_TYPE_SENT_RECEIVED})
    .then(docs=>{
      Promise.all(docs.map(async(doc)=>{
        return recivedRequests.push(await getUser(doc.senderId))
      })).then(()=>{
        res.status(200).send({status:1, receivedRequests:recivedRequests})
      })
    })
    .catch(error=>{
      console.log(error)
    })
}

exports.addFriend = async(req,res,next) =>{
  FriendRequests.find({senderId:req.body.userid,receiverId:req.body.friendid})
    .then(doc=>{
        if(!doc || doc.length <= 0){
          const friend = new FriendRequests({
            senderId:req.body.userid,
            receiverId:req.body.friendid,
            type:process.env.REQUEST_TYPE_SENT_RECEIVED
          })
          friend.save();
          res.status(200).send({status:1,response:'Your friend request has been sent'})
        }else{
          res.status(200).send({status:1,response:'You have already sent request'})
        }}
    )
    .catch(error=>{
      res.status(200).send({status:0,response:'Something went wrong! try again'})
    })

}

exports.acceptFriend = async(req,res,next)=>{

  const userId = req.body.userid ;
  const friendId= req.body.friendid;

  FriendRequests.updateOne({
      senderId: userId,
      receiverId: friendId
    },
    {
      type:process.env.REQUEST_TYPE_FRIEND
    }).then(()=>{

      Promise.all([
        User.updateOne({_id:userId},{$push:{friends:{userId:friendId}}}),
        User.updateOne({_id:friendId},{$push:{friends:{userId:userId}}})
      ]).then(()=>{
        res.status(200).send({status:1,response:'You have accepted friend request'})
      }).catch(error=>{
        res.status(200).send({status:0,response:'something went wrong! try again'})
      })
  }).catch(error=>{
    res.status(200).send({status:0,response:'something went wrong! try again'})
  })
}

exports.cancelFriend = async(req,res,next) => {
  FriendRequests.findOneAndDelete({
    senderId:req.body.userid,
    receiverId: req.body.friendid
  })
    .then(result => {
      res.status(200).send({status:1,response:'You have cancelled friend request'})
    })
    .catch(error=>{
      res.status(200).send({status:0, response:'Something went wrong! try again.'})
    })
}

exports.removeFriend = async(req,res,next) =>{

  FriendRequests.findOneAndUpdate({
    'receiverId':req.body.userid,
    'senderId':req.body.friendid
  },{$set:{type:process.env.REQUEST_TYPE_REJECTED}})
    .then(()=>{
      res.status(200).send({status:1,response:'You have rejected request'})
    })
    .catch(error=>{
      res.status(200).send({status:0,response:'Something went wrong! try again'})
    })
}


