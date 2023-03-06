const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  
//DATABASE
const configDB = {
  host: '139.180.186.20',
  port: 3306,
  user: 'demo',
  password: 's(20A5Q.Mvk(bvoP',
  database: 'demo_s1',
  multipleStatements: true
}

const mysql = require('mysql')
const connection = mysql.createConnection(configDB)


// 1. QUICKINFO
app.get('/api/product', (req,res) => {
    let sql = 'select * from group3_quickinfo as QI CROSS JOIN group3_brand as B on B.brand_id = QI.brand'
    connection.query(sql,(error,dataResponse) => {
        if(error) {
            res.send('404 not found');
        }
        else {
            res.send(JSON.stringify(dataResponse) );
        }
    })
})


//2. SINGLE BRAND
app.get('/api/brands/:brandname', (req,res) => {
  const brandName = req.params.brandname;
  const sql = `select * from group3_quickinfo as QI CROSS JOIN group3_brand as B on B.brand_id = QI.brand where B.brand = "${brandName}"`
  connection.query(sql,(error,dataResponse) => {
      if(error) {
        res.send('404 not found');
      }
      else if (dataResponse.length === 0) {
        res.status(404).send('Không tìm thấy sản phẩm các hạ cần, vui lòng nạp lần đầu');
      }

      else {
        res.send(dataResponse);
      }
  })
})


//3.DISPLAY
app.get('/api/products/display', (req,res) => {
  let sql = 'select * from group3_display'
  connection.query(sql,(error,dataResponse) => {
      if(error) {
          res.send('404 not found');
      }
      else {
          res.send(JSON.stringify(dataResponse));
      }
  })
})

//4.HARDWARE
app.get('/api/products/hardware', (req,res) => {
  let sql = 'select * from group3_hardware'
  connection.query(sql,(error,dataResponse) => {
      if(error) {
          res.send('404 not found');
      }
      else {
          res.send(dataResponse);
      }
  })
})

//5.CAMERA
app.get('/api/products/camera', (req,res) => {
  let sql = 'select * from group3_camera'
  connection.query(sql,(error,dataResponse) => {
      if(error) {
          res.send('404 not found');
      }
      else {
          res.send(dataResponse);
      }
  })
})

//6.DESIGN
app.get('/api/products/design', (req,res) => {
  let sql = 'select * from group3_design'
  connection.query(sql,(error,dataResponse) => {
      if(error) {
          res.send('404 not found');
      }
      else {
          res.send(dataResponse);
      }
  })
})



// 7.CELLULAR
app.get('/api/products/cellular', (req,res) => {
  let sql = 'select * from group3_cellular'
  connection.query(sql,(error,dataResponse) => {
      if(error) {
          res.send('404 not found');
      }
      else {
          res.send(dataResponse);
      }
  })
})


// 8.MULTIMEDIA
app.get('/api/products/multimedia', (req,res) => {
  let sql = 'select * from group3_multimedia'
  connection.query(sql,(error,dataResponse) => {
      if(error) {
          res.send('404 not found');
      }
      else {
          res.send(dataResponse);
      }
  })
})

// 9.CONNECTIVITY
app.get('/api/products/connectivity', (req,res) => {
  let sql = 'select * from group3_connectivity'
  connection.query(sql,(error,dataResponse) => {
      if(error) {
          res.send('404 not found');
      }
      else {
          res.send(dataResponse);
      }
  })
})



// 10.BRAND
app.get('/api/brands', (req,res) => {
  let sql = 'select * from group3_brand'
  connection.query(sql,(error,dataResponse) => {
      if(error) {
          res.send('404 not found');
      }
      else {
          res.send(dataResponse);
      }
  })
})


// 11. Search
app.get('/api/search', (req,res) => {
  let name = req.query.name
  let sql = `select * from group3_quickinfo where name like '%${name}%'`
  connection.query(sql,(error,dataResponse) => {
      if(error) {
          res.send('404 not found');
      }
      else {
          res.send(JSON.stringify(dataResponse) );
      }
  })
})

// QUICKINFO, DISPLAY, HARDWARE, CAMERA, DESIGN, CELLULAR, MULTIMEDIA, CONNECTIVITY, BRAND,
//Full combo

// 12. Compare
app.get('/api/comparison', (req,res) => {
  // Cắt thành array mới, ngăn cách = dấu phẩy
  const productIds = req.query.productID.split(',')
  let sql = `
  select * from group3_quickinfo as A join group3_display as B on A.id = B.id
  join group3_hardware as C on B.id = C.id
  join group3_camera as D on C.id = D.id
  join group3_design as E on D.id = E.id
  join group3_cellular as F on E.id = F.id
  join group3_multimedia as G on F.id = G.id
  join group3_connectivity as H on G.id = H.id
  WHERE A.id in (?) ;
  `
  // let sql = 'SELECT * FROM group3_quickinfo o JOIN group3_multimedia i ON o.id = i.id WHERE i.id IN (?)'
  //
  connection.query(sql, [productIds] ,(error,dataResponse) => {
      if(error) {
          res.send('404 not found');
      }
      else {
          res.send(JSON.stringify(dataResponse)  );
          console.log(productIds)
      }
  })
})
