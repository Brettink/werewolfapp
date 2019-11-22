<?php
    header('Content-Type: application/json');
    try {
        require 'config.php';
        require 'enum_ref.php';
        if (!$db) {
            echo "Could not connect to db";
        } else {
            if (!isset($_GET['ref'])) {
                echo "No query can be done";
            } else {
                $getArr = $_GET['ref'];
                if (!in_array($getArr, $attr)) {
                    echo "Must provide correct reference";
                } else {
                    $tables = array_values($ref->getRefs()[$getArr]);
                    $sql = "select * from ";
                    $end = "";
                    if (strpos($getArr, 'By')){
                        if (!isset($_GET['id'])){
                            echo "No ID specified";
                            goto END;
                        } else {
                            $end = " where " . substr($getArr, -3) . "_id = " . $_GET['id'];
                        }
                    }
                    $retStr = null;
                    foreach($tables as $key=>$value){
                        $sqlIn = $sql . $value . $end . ';';
                        $result = $db->query($sqlIn);
                        if ($result->num_rows > 0){
                            while ($row = $result->fetch_assoc()){
                                $retStr .= json_encode($row);
                            }
                        }
                    }
                    echo $retStr;
                    //var_dump((array_values($ref->getRefs()[$getArr])));
                }
            }
        }
        END:
    } catch (Exception $e){
        echo $e;
    }