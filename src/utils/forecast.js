const request = require ('request')


const forecast = (latitude, longitude, callback) => {

const url = 'http://api.weatherapi.com/v1/current.json?key=88ab2555b17c45e28ce155349230507&q=' + latitude + ',' + longitude

request({ url , json:true }, (error, {body}) => {
    if (error){
              callback('Unable to connect to the Weather service!', undefined)
    } else if (body.error) {
              callback('Unable to find the location', undefined)
   } else
           callback( undefined, body.current.condition.text + '. it is currently ' +  body.current.temp_c  + ' degrees_out'+ ' It feels like a ' +  body.current.feelslike_c + ' degrees' + ' and the Humidty is ' + body.current.humidity +'.')
})
}

module.exports= forecast