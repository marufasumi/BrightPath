const db =require("./server/db.json");
let id =db.length;
module.exports={
    getAllHouses:(req,res)=>{
        let allHouses=db;
        res.status(200).send(allHouses);
    },
    deleteHouse:(req,res)=>{
        const {house_id} =req.params
        for(i=0; i<db.length;i++){
            if(db[i].id=== +house_id){
                db.splice(i,1)

            }
        }

    },

    createHouse:(req,res)=>{

        /*
        let { address, price, imageURL } = req.body
        let newHouse = {
            id: id,
            address, 
            price,
            imageURL
        }

        */
        id++;
        let newHouse = {...req.body, id: id};
        db.push(newHouse);

        let response ={
            mess:"Succesfully added new house",
            allHouses:db
        }
        res.status(200).send(response);
    },

    updateHouse:(req,res)=>{
        const {house_id} =req.params;
        const{type} =req.body;
        console.log(house_id);
        console.log(type);

        for (let i = 0; i < db.length; i++) {
            if (db[i].id=== +movie_id) {
                if (type==='plus') {
                    db[i].rating++
                    
                }
                if (type==='minus') {
                    db[i].rating--
                    
                }
                
            }
         
            
        }

    }
}