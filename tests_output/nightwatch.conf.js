const properties = require('./nightwatch.props')
module.exports = {
    "src_folders" : "tests", "page_objects_path": "PageObjects",
  
    "selenium" : {
      "start_process" : true,
      "server_path" : properties.resourcePath + properties.seleniumServer,
      "log_path" : "",
      "port" : 4445,
      "cli_args" : {
        "webdriver.chrome.driver" : properties.resourcePath + properties.chromedriver,
        "webdriver.gecko.driver": properties.resourcePath + properties.geckodriver,
        "webdriver.edge.driver": properties.resourcePath + properties.edgedriver,
      }
    },
  
    "test_settings" : {
      "test_workers": true,
      "default" : {
        "skip testcases_on_fail": false,
        "launch_url" : "http://localhost",
        "selenium_port"  : 4445,
        "selenium_host"  : "localhost",
        "silent": true,
        "screenshots" : {
          "enabled" : false,
          "path" : ""
        },
        "desiredCapabilities": {
          "browserName": "chrome",
        }
      },
  
      "firefox" : {
        "desiredCapabilities": {
          "browserName": "firefox",
          "marionette": true,
          "javascriptEnabled": true,
          "acceptSslCerts": true,
          // "binary": "C:\\Program Files\\Mozilla Firefox"
        }
      },
  
      "edge" : {
        "desiredCapabilities": {
          "browserName": "MicrosoftEdge"
        }
      }
    }
  }