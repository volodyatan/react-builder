import axios from 'axios'

const serverUrl = process.env.mongoServerUrl

// retrieve all templates (GET)
export default async function getAllTemplates(req, res) {
    if(req.method !== 'GET'){
        res.status(500).json({ message: 'this is a GET request'})
    }

    let dbResponse 

    try{
        dbResponse = await axios({
            method: 'get',
            url: `${serverUrl}/api/getAllData`
        });
    }catch (e) {
        res.status(500).json({ message: 'server error', error: e})
    }

    let allTemplates 

    try {
        allTemplates = dbResponse.data.data
    }catch (e) {
        res.status(500).json({ message: 'data could not be retrieved', error: e})
    }
    
    res.status(200).json({
            message: 'all templates successfuly retrieved',
            data: allTemplates
        })
  }
  