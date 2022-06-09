// Very simple, given an integer or a floating-point number, find its opposite.
// 
// Examples:
// 
// 1: -1
// 14: -14
// -34: 34



    function opposite(number) {
        if (number < 0 ) {
          return Math.abs(number)
        }else{
          return -Math.abs(number)
        }
          
      }


      // =========================
      // OR as a ternary 
      //==========================  

      function opposite(number){
        return (number < 0 ? Math.abs(number) : -Math.abs(number));
       }



      // =========================
      // OR even more simple (Lesson learned)
      //==========================  

      function opposite(number){
          return (-number);
      }