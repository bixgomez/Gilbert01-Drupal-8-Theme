console.log('hey there');

  jQuery(document).ready(function($){

    var imageObjects = $( "img[data-entity-type='file']" );
    var textObjects = $( "p" );

    $contentArea = $( "div.layout-content article p" );

    $allImages = $contentArea.find( imageObjects );
    $fontSize = $contentArea.css("font-size");
    $pMargin = $contentArea.css("margin-bottom");

    console.log($fontSize);
    console.log($pMargin);

    $thisFontSizeNum = parseInt($fontSize);
    $fontSizeFactor = (($thisFontSizeNum / 960) * 100);
    $fontVh = $fontSizeFactor + '%';
    console.log($fontSizeFactor);
    console.log($fontVh);
    // $($contentArea).css( "font-size", $fontVh );

    $thisMarginNum = parseInt($pMargin);
    $marginFactor = (($thisMarginNum / 960) * 100);
    $marginVh = $fontSizeFactor + '%';
    console.log($marginFactor);
    console.log($marginVh);
    // $($contentArea).css( "margin-bottom", $marginVh );

    // console.log($allImages);

    $.each($allImages, function (index, value) {
      console.log(this.naturalWidth);
      // console.log(this.src);
      console.log(index);
      // console.log(value);
      $imageFactor = ((this.naturalWidth / 960) * 100);
      $thisVh = $imageFactor + '%';
      $(this).css( "width", $thisVh );
      $(this).css( "height", "auto" );
    });

  });
