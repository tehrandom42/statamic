// This used to have routines and data for the navigation, using images.
// Now it's just the popwin function.
function popwin(src, myx, myy)  {
x = myx + 20;
y = myy + 40;

myWindow = window.open(src, "", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,width="+x+",height="+y);
}

// some stubs that replace obsolete functions
function ShowLayer(showEl) {}
function setBreadCrumb() {}
function setImage(name, replacement) {}

// 3-d array used in old navigation, might still be referenced in some old pages
dummy_array3 = new Array(3);
nav = new Array();
nav[0] =  new Array( dummy_array3 );
nav[1] =  new Array( dummy_array3, dummy_array3, dummy_array3, dummy_array3 );
nav[2] =  new Array(
      dummy_array3, dummy_array3, dummy_array3, dummy_array3,
      dummy_array3, dummy_array3, dummy_array3, dummy_array3
      );
nav[3] =  new Array(dummy_array3, dummy_array3, dummy_array3, dummy_array3);
nav[4] =  new Array(dummy_array3, dummy_array3, dummy_array3, dummy_array3
      );
nav[5] =  new Array(
        dummy_array3, dummy_array3, dummy_array3, dummy_array3, dummy_array3
        );
nav[6] =  new Array(dummy_array3, dummy_array3, dummy_array3, dummy_array3 );
nav[7] =  new Array(
    dummy_array3, dummy_array3, dummy_array3, dummy_array3, dummy_array3, dummy_array3
     );
nav[8] =  new Array(dummy_array3, dummy_array3, dummy_array3, dummy_array3 );
nav[9] =  new Array(dummy_array3, dummy_array3, dummy_array3, dummy_array3 );
