<?php
$images = [
    [
        "src" => "image1.jpg",
        "title" => "Photo 1",
        "description" => "Description for Photo 1",
        "category" => "cats"
    ],
    [
        "src" => "image2.jpg",
        "title" => "Photo 2",
        "description" => "Description for Photo 2",
        "category" => "landscape"
    ],
    [
        "src" => "image3.jpg",
        "title" => "Photo 3",
        "description" => "Description for Photo 3",
        "category" => "food"
    ]
];

header("Content-Type: application/json");
echo json_encode($images);
?>
