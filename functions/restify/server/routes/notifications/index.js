import RR from 'restify-router';

const router = new RR.Router();

router.get("/test" , (req, res) => {
  try {
    const data = {
      xiaomi : 'Good',
      huawei : 'I miss you baby',
      google : 'I love you'
    }

    return res.json( data );
  } catch ( err ) {
    console.log( err )
  }
})


export default router;
