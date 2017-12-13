// this is my function for the splash page, to transition onto the website
(function(){ // This is the start of my iife
      var dateRange = [];
      var meals = [];

      var init = function(){
        var close = document.getElementById("logoS");
        var open = document.getElementById("enterSite");
        open.onclick = openNav;
        close.onclick = closeNav;
      }();

      function openNav() {
              
              document.getElementById("sideNavigation").style.width = "100%";
      }

      function closeNav() {
              document.getElementById("sideNavigation").style.width = "0";
          }
      // Function for box div change everytime a button has been validated
      $(document).ready(function(){
          $(".hike-button").click(function(){
              $("#stepOne").hide();
              $("#stepTwo").show();
       });

      $(function () {
          $("form").submit(function(e) {
              e.preventDefault();
          });
      });

       $(".add-place").click(function(){
              $("#stepThree").hide();
              $("#stepFour").show();
        });

       $("#backSpace, #prev").click(function(){
              $("#stepOne").show();
              $("#stepTwo").hide();
        });

        $("#backSpaceTwo, #prevTwo").click(function(){
              $("#stepTwo").show();
              $("#stepThree").hide();
        });

          $("#backSpaceThree, #prevThree").click(function(){
              $("#stepThree").show();
              $("#stepFour").hide();
        });
      });
      //Function to select hike, accomdation type and it will display the correct accomodation images  and headings
      //in the following pages. It also gives the buttons on the next page a new id name.
      (function(){

        var button = document.getElementById('accomodation');
        var button2 = document.getElementById('accomodation');
        var button3 = document.getElementById('accomodation');
        var button4 = document.getElementById('accomodation');

        var chosenHike = {
            imageOne: 'images/milford/hut.jpg',
            imageTwo: 'images/milford/house.jpg',
            imageThree: 'images/milford/tent.jpg',
            imageFour: 'images/milford/motel.jpg'
        };
       
        document.getElementById('accomodation').addEventListener('change', function (evt) {
          var imgName = this.value;
          var i = 0;

            if (imgName === "tent") {
              chosenHike.imageOne = 'images/tent/tent1.jpg';
              chosenHike.imageTwo = 'images/tent/tent2.jpg';
              chosenHike.imageThree = 'images/tent/tent3.jpg';
              chosenHike.imageFour = 'images/tent/tent4.jpg';
                $(".add-place").each(function() {
                $(this).attr("id", "tent" + i++);
                });
                  $("#tent0").click(function(){
                  $("#finalBox").attr({src: 'images/tent/tent1.jpg'});
                  $("#displayHeading").text('Katikahi Farm');
                  });
                  $("#tent1").click(function(){
                  $("#finalBox").attr({src: 'images/tent/tent2.jpg'});
                  $("#displayHeading").text('Kanuku');
                  });
                  $("#tent2").click(function(){
                  $("#finalBox").attr({src: 'images/tent/tent3.jpg'});
                  $("#displayHeading").text('Te Rata');
                  });
                  $("#tent3").click(function(){
                  $("#finalBox").attr({src: 'images/tent/tent4.jpg'});
                  $("#displayHeading").text('River Retreat');
                  });  
            }
        });

        document.getElementById('accomodation').addEventListener('change', function (evt) {
          var imgName2 = this.value;
          var i = 0;

            if (imgName2 === "hut") {
                chosenHike.imageOne = 'images/hut/hut1.jpg';
                chosenHike.imageTwo = 'images/hut/hut2.jpg';
                chosenHike.imageThree = 'images/hut/hut3.jpg';
                chosenHike.imageFour = 'images/hut/hut4.jpg';
                  $(".add-place").each(function() {
                  $(this).attr("id", "hut" + i++);
                  });
                    $("#hut0").click(function(){
                    $("#finalBox").attr({src: 'images/hut/hut1.jpg'});
                    $("#displayHeading").text('Katikahi Farm');
                    });
                    $("#hut1").click(function(){
                    $("#finalBox").attr({src: 'images/hut/hut2.jpg'});
                    $("#displayHeading").text('Kanuku');
                    });
                    $("#hut2").click(function(){
                    $("#finalBox").attr({src: 'images/hut/hut3.jpg'});
                    $("#displayHeading").text('Te Rata');
                    });
                    $("#hut3").click(function(){
                    $("#finalBox").attr({src: 'images/hut/hut4.jpg'});
                    $("#displayHeading").text('River Retreat');
                    });  
                }
        });

        document.getElementById('accomodation').addEventListener('change', function (evt) {
          var imgName3 = this.value;
          var i = 0;

            if (imgName3 === "motel") {
                chosenHike.imageOne = 'images/motel/motel1.jpg';
                chosenHike.imageTwo = 'images/motel/motel2.jpg'; 
                chosenHike.imageThree = 'images/motel/motel3.jpg';
                chosenHike.imageFour = 'images/motel/motel4.jpg';
                  $(".add-place").each(function() {
                  $(this).attr("id", "motel" + i++);
                  });
                    $("#motel0").click(function(){
                    $("#finalBox").attr({src: 'images/motel/motel1.jpg'});
                    $("#displayHeading").text('Katikahi Farm');
                    });
                    $("#motel1").click(function(){
                    $("#finalBox").attr({src: 'images/motel/motel2.jpg'});
                    $("#displayHeading").text('Kanuku');
                    });
                    $("#motel2").click(function(){
                    $("#finalBox").attr({src: 'images/motel/motel3.jpg'});
                    $("#displayHeading").text('Te Rata');
                    });
                    $("#motel3").click(function(){
                    $("#finalBox").attr({src: 'images/motel/motel4.jpg'});
                    $("#displayHeading").text('River Retreat');
                    }); 
                }
        });

        document.getElementById('accomodation').addEventListener('change', function (evt) {
          var imgName4 = this.value;
          var i = 0;

            if (imgName4 === "house") {
                chosenHike.imageOne = 'images/house/house1.jpg';
                chosenHike.imageTwo = 'images/house/house2.jpg'; 
                chosenHike.imageThree = 'images/house/house3.jpg';
                chosenHike.imageFour = 'images/house/house4.jpg';
                  $(".add-place").each(function() {
                  $(this).attr("id", "house" + i++);
                  });
                    $("#house0").click(function(){
                    $("#finalBox").attr({src: 'images/house/house1.jpg'});
                    $("#displayHeading").text('Katikahi Farm');
                    });
                    $("#house1").click(function(){
                    $("#finalBox").attr({src: 'images/house/house2.jpg'});
                    $("#displayHeading").text('Kanuku');
                    });
                    $("#house2").click(function(){
                    $("#finalBox").attr({src: 'images/house/house3.jpg'});
                    $("#displayHeading").text('Te Rata');
                    });
                    $("#house3").click(function(){
                    $("#finalBox").attr({src: 'images/house/house4.jpg'});
                    $("#displayHeading").text('River Retreat');
                    }); 
                }
        });

        function displayImages(){
          showImg = document.getElementById("imageFirst");
          showImg.src = chosenHike.imageOne;

          showImg2 = document.getElementById("imageSecond");
          showImg2.src = chosenHike.imageTwo;

          showImg3 = document.getElementById("imageThird");
          showImg3.src = chosenHike.imageThree;

          showImg4 = document.getElementById("imageFourth");
          showImg4.src = chosenHike.imageFour;
        }

      function init(){
        button.addEventListener("change", displayImages, false);
        button2.addEventListener("change", displayImages,false);
        button3.addEventListener("change", displayImages,false);
        button4.addEventListener("change", displayImages,false);
        }

      init();

      }());
      // this is the function to display the name of chosen hike on third page.

      $(document).ready(function(){
          $("#firstHike").click(function(){
              $(".display-hike").text('Tongariro');
          });
      });

      $(document).ready(function(){
          $("#secondHike").click(function(){
              $(".display-hike").text('Abel Tasman');
          });
      });

      $(document).ready(function(){
          $("#thirdHike").click(function(){
              $(".display-hike").text('Milford Track');
          });
      });

      $(document).ready(function(){
          $("#fourthHike").click(function(){
              $(".display-hike").text('Heaphy Track');
          });
      });

      //This is the function to validate the amount of ppl chosen and filtering out the non available accomodation type and displaying
      //the amount of people in following pages

      $(document).ready(function(){
          $('#pax').change(function() {
            var paxNumber = $(this).val();
            updateAccomSelect(paxNumber); 
        });
      });    

      function updateAccomSelect(val){

        if(val === 'val1') { 
          $("#accomodation option[value=motel]").hide(); 
          $("#accomodation option[value=tent]").show();
          $("#accomodation option[value=house]").show();
          $("#accomodation option[value=hut]").show();
          $(".sleeps").text('1 person');
          $("#displayNights").text('1 people');
        }

        if(val === 'val2') {
          $("#accomodation option[value=motel]").show(); 
          $("#accomodation option[value=tent]").show(); 
          $("#accomodation option[value=house]").show(); 
          $("#accomodation option[value=hut]").show(); 
          $(".sleeps").text('2 people');
          $("#displayNights").text('2 people'); 
        }

        if(val === 'val3') {
          $("#accomodation option[value=motel]").show();  
          $("#accomodation option[value=house]").show(); 
          $("#accomodation option[value=hut]").show(); 
          $("#accomodation option[value=motel]").show(); 
          $("#accomodation option[value=tent]").hide();
          $(".sleeps").text('3 people');
          $("#displayNights").text('3 people');  
        }

        if(val === 'val4') {
          $("#accomodation option[value=motel]").show();  
          $("#accomodation option[value=house]").show(); 
          $("#accomodation option[value=hut]").show(); 
          $("#accomodation option[value=tent]").hide();
          $(".sleeps").text('4 people');
          $("#displayNights").text('4 people');
        }

        if(val === 'val5') {
          $("#accomodation option[value=motel]").hide();  
          $("#accomodation option[value=house]").hide(); 
          $("#accomodation option[value=hut]").show(); 
          $("#accomodation option[value=tent]").hide();
          $(".sleeps").text('5 people');
          $("#displayNights").text('5 people');
        }

        if(val === 'val6') {
          $("#accomodation option[value=motel]").hide();  
          $("#accomodation option[value=house]").hide(); 
          $("#accomodation option[value=hut]").show(); 
          $("#accomodation option[value=tent]").hide();
          $(".sleeps").text('6 people');
          $("#displayNights").text('6 people');
        }
      }
      //This is to get the value of the meals

      $(document).ready(function(){
        
         $('#meals').change(function() {
          if( $(this).val() == 'breakfast' ) {
            $("#mealType").text('Breakfast Option');
            meals.unshift(dataArray[0].meals.breakfast);
          } 

          if( $(this).val() == 'lunch' ) {
            $("#mealType").text('Lunch Option');
            meals.unshift(dataArray[0].meals.lunch);
          }

          if( $(this).val() == 'dinner' ) {
            $("#mealType").text('Dinner Option');
            meals.unshift(dataArray[0].meals.dinner);
          }

          if( $(this).val() == 'all' ) {
            $("#mealType").text('All meals Option');
            meals.unshift(dataArray[0].meals.allMeals);
          }
        });
      }); 
      // This is the function to validate the dates entered again the type of accomodation chosen, if ok goes to next page
      // if not don;t let them pass, it also displays the cost for each accomodation picked.
      // This function also grabs the array values up top and calculates the total cost.
      document.getElementById('accomodation').addEventListener('change', function (evt) {
        var accom = this.value;

          function dateCheck(days, accom){

            if (accom === 'tent') {
              var tentCost = (dataArray[1].cost);
              var totalTent = (tentCost * days);
              var totalMeal = (meals[0] * days); 
              var finalCost = (totalMeal + totalTent);
              $(".total-cost").text('Total $' + finalCost + ' NZD');

                if (days >= 1 && days <= 5) {
                  $("#stepThree").show();
                  $("#stepTwo").hide();
                  $(".costs").text('$157 per night');
              
              } else { 
                  $("#modal").show();
              }  
            }

            if (accom === 'hut') {
              var hutCost = (dataArray[0].cost);
              var totalHut = (hutCost * days);
              var totalMeal1 = (meals[0] * days);
              var finalCost1 = (totalHut + totalMeal1);
              $(".total-cost").text('Total $' + finalCost1 + ' NZD');
              
                if (days >= 1 && days <= 10) {
                  $("#stepThree").show();
                  $("#stepTwo").hide();
                  $(".costs").text('$30 per night');

                } else { 
                  $("#modal").show();
                }
            }

            if (accom === 'motel') {
              var motelCost = (dataArray[2].cost);
              var totalMotel = (motelCost * days);
              var totalMeal2 = (meals[0] * days);
              var finalCost2 = (totalMotel + totalMeal2);
              $(".total-cost").text('Total $' + finalCost2 + ' NZD');

              if (days >= 3 && days <= 10) {
                $("#stepThree").show();
                $("#stepTwo").hide();
                $(".costs").text('$90 per night');

              } else { 
                  $("#modal").show();
                }
            }

            if (accom === 'house') {
                var houseCost = (dataArray[3].cost);
                var totalHouse = (houseCost * days);
                var totalMeal3 = (meals[0] * days);
                var finalCost3 = (totalHouse + totalMeal3);
                $(".total-cost").text('Total $' + finalCost3 + ' NZD');
              
              if (days >= 3 && days <= 10) {
                $("#stepThree").show();
                $("#stepTwo").hide();
                $(".costs").text('$240 per night');

              } else { 
                  $("#modal").show();
                }
            }
      } //dateCheckEnds

       //This is the function to get the total number of days
          function parseDate(str) {
              return new Date(str);
          }

          function daydiff(first, second) {
              //divide by num of milliseconds in a day
              return Math.floor((second-first)/86400000);
          }

          $("#check").on("click", function() {
              var diff=(daydiff(parseDate($('#calFrom').val()), parseDate($('#calTo').val())));
              dateRange.push(diff);

              $(".days").text(diff + ' nights stay');
              $(".detail-last-house").text(diff + ' nights stay');

              dateCheck(dateRange[0], accom); 
          });   
      });
      
      $(document).ready(function(){
          $("#modalClose").click(function(){
              dateRange.splice(0);
              $("#modal").hide();
          });
      });
})();