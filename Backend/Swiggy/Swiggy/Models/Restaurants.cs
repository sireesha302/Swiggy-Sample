using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Swiggy.Models
{
    public class Locations
    {

        public int Id { get; set; }

        public string City { get; set; }

        public string Area { get; set; }

    }
    public class AreaNames
    {
        public string Areaname { get; set; }
        public int AreaId { get; set; }
    }
    public class Cities
    {
        public string cityName { get; set; }
        public int cityId { get; set; }
    }

    public class Restaurants
    {
        public string ResName
        {
            get; set;
        }
        public string AreaName { get; set; }
        public string item { get; set; }
        public int price { get; set; }
        public string Deliverytype { get; set; }
        public int Deliverycharge { get; set; }
        public string category { get; set; }
    }
    public class RestaurantsData
    {
        public string ResName { get; set; }
        public string AreaName { get; set; }
    }
    public class Example
    {
        public string AreaName { get; set; }
        public string CityName { get; set; }
        public int AreaId { get; set; }
        public int CityId { get; set; }
    }

    public class RestaurantList
    {
        public string RestaurantName { get; set; }
        public string AreaName { get; set; }
        public int Rid { get; set; }
        public string ImageUrl { get; set; }
        public string DeliveryType { get; set; }
        public int DeliveryCharge { get; set; }
        public int DeliveryTime { get; set; }
    }

    public class ItemsList
    {
        public string RestaurantName { get; set; }
        public string ItemName { get; set; }
        public string ItemType { get; set; }
        public int Price { get; set; }
        public string Quantity { get; set; }
        public string AreaName { get; set; }
        public string ImageUrl { get; set; }
        public string ResimageUrl { get; set; }
        public double OfferPrice { get; set; }
        public string DeliveryType { get; set; }
        public int DeliveryCharge { get; set; }
        public int DeliveryTime { get; set; }
        public int Plate { get; set; }
        public int Rid { get; set; }

    }
    public class signUpDetails
    {
     
        public string UserName;
        public string phNum;
        public string emailId;
        public string pwd;
        public string address;
       
       
    }
    public class loginDetails
    {
        public string phNum;
        public string pwd;
        public string address;
        public string UserName;
        public int otp;
        public string emailId;
    }
    public class AddressDetails
    {
        public string phNum;
        public string address;
    }

    public class OrderDet
    {
        public string phNum;
        public int Price;
        public int DeliveryCharge;
        public int Topay;
        public int ActualPrice;
        public string itemName;
        public int Quantity;
        public string RestaurantName;
        public string Status;
        public int OrderId;
        public string OrderedDate;
        public string CancelledTime;
        public int RestaurantId;
        public string DeliveryBoy;
        public string BoyphNum;
        public int DeliveryBoyId;

    }

   



}