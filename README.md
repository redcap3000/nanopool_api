# How it works ?

``` 
var $nanoapi = require('nanopool_api');
$nanoapi.balance('YOUR_WALLET_ADDRESS', function(p_ReqResponse, p_JsonBody)
{
    console.log(p_ReqResponse); ///< Contain request response as statusCode, etc...
    console.log(p_JsonBody); ///< Contain the api response
});

```

# List of complete api calls & parameters

To see all api methods see the official [nanopool website](https://eth.nanopool.org/api)