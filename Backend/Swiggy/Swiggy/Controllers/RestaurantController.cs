using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Swiggy.Models;

namespace Swiggy.Controllers
{
    public class RestaurantController : ApiController
    {
        DataAccess obj = new DataAccess();
        [HttpGet]
        [Route("api/City")]
        public IEnumerable<Cities> GetAllCities()
        {
            return obj.GetCities();
        }
        [HttpGet]
        [Route("api/Area")]
        public IEnumerable<AreaNames> GetAllAreas()
        {
            return obj.GetAreaNames();
        }
        /* public IEnumerable<Locations> GetData()
         {
             return obj.GetSwiggyData();
         }

         [HttpGet]
         [Route("api/Restaurent")]
         public IEnumerable<Restaurants> GetItemsData()
         {
             return obj.GetItems();
         }
         [HttpGet]
         [Route("api/Restaurent/res")]
         public IEnumerable<RestaurantsData> GetRestaurentDatas()
         {
             return obj.GetRestaurantsDatas();
         }*/
        [HttpGet]
        [Route("api/AreaCity")]
      public IEnumerable<Example> GetExamples()
        {
            return obj.GetAreacitynames();
        }
        [HttpGet]
        [Route("api/RestaurantsList")]
        public IEnumerable<RestaurantList> GetLists()
        {
            return obj.GetRestaurantLists();
        }
        [HttpGet]
        [Route("api/FoodList")]
        public IEnumerable<ItemsList> GetItemsLists()
        {
            return obj.GetItemLists();
        }
        [HttpPost]
        [Route("api/Swiggy/post")]
        public string Create([FromBody] signUpDetails details)
        {
          return  obj.insertUser(details);
           // return Request.CreateResponse("success");
        }

       [HttpGet]
        [Route("api/Swiggy/{value1}/{value2}")]
     
        public IEnumerable<loginDetails> Search(string value1,string value2)
        {
           
            return obj.login(value1,value2);
        }
      /*  [HttpGet]
        [Route("api/login")]
        public IEnumerable<loginDetails> LoginDetails()
        {
            return obj.login();
        }*/
        [HttpPost]
        [Route("api/Swiggy/update")]
        public string Update([FromBody] loginDetails details)
        {
           return obj.update(details);
          //  return Request.CreateResponse("success");
        }
        [HttpPost]
        [Route("api/Swiggy/updateaddress")]
        public string UpdateAddress([FromBody] AddressDetails details)
        {
             return obj.updateAddress(details);
            //r  return Request.CreateResponse("success");
        }
        [HttpPost]
        [Route("api/Swiggy/OrderDet")]
        public string OrderDetails([FromBody] OrderDet details)
        {
            return obj.OrderDetailsofCust(details);
        }
        [HttpGet]
        [Route("api/Swiggy/Forget/{value1}")]

        public string forgetPass(string value1)
        {

            return obj.forgetOtpPass(value1);
        }
        [HttpGet]
        [Route("api/Swiggy/Forget/{value1}/{value2}")]

        public string checkOtp(string value1,int value2)
        {

            return obj.checkOtpCust(value1,value2);
        }
        [HttpGet]
        [Route("api/Swiggy/Orders/{value1}")]
        public IEnumerable<OrderDet> GetOrderDets(string value1)
        {
            return obj.getOrderItems(value1);
        }
        [HttpPost]
        [Route("api/Swiggy/OrderDet/Cancelled")]
        public string CancelOrderDetails([FromBody] OrderDet details)
        {
            return obj.CancelOrderDetailsofCust(details);
        }
        }
    }

