
var canvas = new fabric.Canvas('myCanvas');
block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
   fabric.Image.fromURL(get_image, function(Img) {
   block_image_object = Img;
       
   block_image_object.scaleToWidth(block_image_width);
   block_image_object.scaleToHeight(block_image_height);
   block_image_object.set({
   top:block_y,
   left:block_x
   });
   canvas.add(block_image_object);

   });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '82')
   {
       new_image('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxd-wK0Fs4Ez3FTa_DukVfTn3xBlH1Pty9w&usqp=CAU'); 
       console.log("r");
   }
   if(keyPressed == '71')
   {
       block_x = 200;
       new_image('https://i.pinimg.com/originals/6a/e5/ec/6ae5ec68ea4a20bb713097cfec1d9c62.png'); 
       console.log("g");
   }
   
   if(keyPressed == '89')
   {
       block_x =450;
       new_image('data:image/jpeg;base64,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'); 
       console.log("y");
   }
   if(keyPressed == '80')
   {
       block_x = 620;
       new_image('data:image/jpeg;base64,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'); 
       console.log("p");
   }
   if(keyPressed == '66')
   {
       block_x = 830;
       new_image('data:image/jpeg;base64,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'); 
       console.log("b");
   }
   
}

