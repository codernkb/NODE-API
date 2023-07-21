//////////verify /////////////

app.get('/verify', middleware.validateToken, (req,res,next) =>{
  res.status(200).json({
    "success": true,
    "message":"welcome",
    "result":""

  })
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
    console.log(`http://localhost:${port}`)
  });