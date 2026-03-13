const { devices } = require("@playwright/test");


const config=({
  testDir: './tests',
  retries:1,
  workers:3,
    timeout:40*1000,
    expect:{
      timeout:5000,
    
    },
    reporter:'html',
    projects:[{
    name:'safari',
    use:{
      browserName:'webkit',
      headless:true,
      screenshot:'on',
      trace:'on'
      
    }
    },
    {
    name:'chrome',
    use:{
      browserName:'chromium',
      headless:false,
      //viewport:{width:720,height:720},
      //...devices['iPhone 11'],
      ignoreHttpsErrors:true,
      Permissions:['geolocation'],
      screenshot:'off',
      trace:'on',
      //video:'retain-on-failure'
      video:'on'
    }
    }
  ]

})
module.exports=config;
