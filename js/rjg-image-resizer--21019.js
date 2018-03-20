jQuery(document).ready(function($){

  var imageObjects = $( "img[data-entity-type='file']" );
  var textObjects = $( "p" );

  $contentArea = $( "div.region.content article" );
  $textArea = $( "div.region.content article p" );

  $allImages = $contentArea.find( imageObjects );
  $fontSize = $textArea.css("font-size");
  $lineHeight = $textArea.css("line-height");
  $pMargin = $textArea.css("margin-bottom");

  $thisFontSizeNum = parseInt($fontSize);
  $fontSizeFactor = (($thisFontSizeNum / 960) * 100);
  $fontVh = $fontSizeFactor + 'vw';
  $($textArea).css( "font-size", $fontVh );

  $thisLineHeightNum = parseInt($lineHeight);
  $lineHeightFactor = (($thisLineHeightNum / 960) * 100);
  $lineVh = $lineHeightFactor + 'vw';
  $($textArea).css( "line-height", $lineVh );

  $thisMarginNum = parseInt($pMargin);
  $marginFactor = (($thisMarginNum / 960) * 100);
  $marginVh = $fontSizeFactor + 'vw';
  $($textArea).css( "margin-bottom", $marginVh );

  $.each($allImages, function (index, value) {
    $thisImgWidth = this.naturalWidth;
    $thisImgWidthNum = parseInt($thisImgWidth);
    $imageFactor = ((this.naturalWidth / 960) * 100);
    $thisVh = $imageFactor + 'vw';
    $(this).css( "width", $thisVh );
    $(this).css( "height", "auto" );
  });

});
