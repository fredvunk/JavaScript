<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test</title>
    <link rel="stylesheet" href="style.css">
<!--<script src="script.js"></script>-->
</head>
<body>
<form method="post" action="">
    <input type="text" name="feedurl" placeholder="Enter website feed URL">&nbsp;<input type="submit" value="Submit" name="submit">
</form>

<?php


$url = "https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss";
if(isset($_POST['submit'])){
    if($_POST['feedurl'] != ''){
        $url = $_POST['feedurl'];
    }
}

    if($_POST['feedurl'] != ''){
    $url = $_POST['feedurl'];
    }

$invalidurl = false;
    // if reads then assign value in $feeds
if(@simplexml_load_file($url)){
    $feeds = simplexml_load_file($url);
} else{
    $invalidurl = true;
    echo "<h2>Invalid RSS feed URL</h2>";
}
//echo "<pre>";
//print_r($feeds);
//die;
//read values if not empty
$i = 0;
if(!empty($feeds)) {

    $site = $feeds->channel->title;
    $sitelink = $feeds->channel->link;

    echo "<h1>" . $site . "</h1>";

    foreach ($feeds->channel->item as $item) {
        $title = $item->title;
        $link = $item->link;
        $guid = $item->guid;
        $pubDate = date('D, d M Y, H:i:s, T');
        $description = $item->description;
        $category = $item->category;

    }
}

?>
<div class="post">
    <div class="postHead">
        <h2><a class="feedTitle" href="<?php echo $link; ?>"><?php echo
                $title; ?></a></h2>
        <span><?php echo $pubDate; ?></span>
    </div>
    <div class="postContent">
        <?php echo $description?> <a href="<?php echo $link; ?>"></a>
    </div>
    <div class="postCategory">
        <span><?php echo $category; ?></span>
    </div>
</div>


</body>
</html>