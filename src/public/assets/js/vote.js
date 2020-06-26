const bot = require("@models/vote")
function votes(){
         bot.findOne({
         botid: bot.botid}, (err , res) => {
         if(!res){
         const newvote = new BLACKBOT({
                votes: 1,
                botid: bot.botid,
            })
            newvote.save().catch(err => console.log(err));
            alert("Success voted for this bot")
         }else{
         res.votes = res.votes- + -1
         res.save()
         alert("Success voted for this bot")
         }
   })
}
