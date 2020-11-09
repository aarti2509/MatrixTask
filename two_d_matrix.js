//2D matrix multiplication

function two_d_matrix()
      {
    
      var rows=2;
        var cols=2;
        var matrix1=new Array(rows);
        for(var i=0;i<rows;i++)
        {
            matrix1[i]=new Array(cols);
        }
       
       var matrix2=new Array(rows);
       for(var i=0;i<rows;i++)
       {
           matrix2[i]=new Array(cols);
       }

      
       var result=new Array(rows);
       for(var i=0;i<rows;i++)
       {
           result[i]=new Array(cols);
       }


       //Input from user array1
       for(var i=0;i<rows;i++)
       {
           for(var j=0;j<cols;j++)
           {
               matrix1[i][j]=prompt("Enter First Matrix value : ");
           }
       }

       document.write("First Matrix"+"<br>");
       for(var i=0;i<rows;i++)
       {
           for(var j=0;j<cols;j++)
           {
               document.write("  ");
               document.write(matrix1[i][j]);
           }
           document.write("<br>");
       }

       document.write("<br>");
       document.write("<br>");
       document.write("<br>");

        //Input from user array2
        for(var i=0;i<rows;i++)
       {
           for(var j=0;j<cols;j++)
           {
               matrix2[i][j]=prompt("Enter Second Matrix value : ");
           }
       }
 
      //display array2 values
      document.write("Second Matrix"+"<br>");
       for(var i=0;i<rows;i++)
       {
           for(var j=0;j<cols;j++)
           {
               document.write("  ");
               document.write(matrix2[i][j]);
           }
           document.write("<br>");
       }

       document.write("<br>");
       document.write("<br>");
       document.write("<br>");

      

       //multiply of 2d
       for(var i=0;i<rows;i++)
       {
           for(var j=0;j<cols;j++)
           {
               result[i][j]=0;
               for(var k=0;k<rows;k++)
               {
                   result[i][j]=result[i][j]+matrix1[i][k]*matrix2[k][j];
               }

           }
       }

     document.write("Result of Matrix"+"<br>");
    for(var i=0;i<rows;i++)
    {
        for(var j=0;j<cols;j++)
        {
            document.write(result[i][j]+ " ");
        }
        document.write("<br>");
    }



      }   
