
<?php
// Connect to the Access database
$database_path = realpath('giftCustomize.mdb');
$conn = new COM('ADODB.Connection');
$conn->Open("Provider=Microsoft.ACE.OLEDB.12.0;Data Source=$database_path;");

$sql = "SELECT * FROM ACCOUNT";
$rs = $conn->Execute($sql);

echo "<table>";
echo "<tr><th>ACCOUNT NUMBER</th><th>NAME</th><th>HOLDER<tr><th>TYPE<tr><th>EXPIRING DATE</th></tr>";
while (!$rs->EOF) {
  echo "<tr><td>".$rs->Fields("ACCOUNT NUMBER")."</td>";
  echo "<td>".$rs->Fields("NAME")."</td>";
  echo "<td>".$rs->Fields("HOLDER")."</td></tr>";
  echo "<td>".$rs->Fields("TYPE")."</td>";
  echo "<td>".$rs->Fields("EXPIRING DATE")."</td></tr>";
  $rs->MoveNext();
}
echo"</table>";

$sql ="SELECT * FROM CUSTOMER";
$rs = $conn->Execute($sql);


echo "<table>";
echo "<tr><th>ID NUMBER</th><th>FULL NAME</th><th>EMAIL ADDRESS<tr><th>CELLPHONE NUMBER <tr><th>HOME ADDRESS</th></tr>";
while (!$rs->EOF) {
  echo "<tr><td>".$rs->Fields("AID NUMBER")."</td>";
  echo "<td>".$rs->Fields("FULL NAME")."</td>";
  echo "<td>".$rs->Fields("EMAIL ADDRESS")."</td></tr>";
  echo "<td>".$rs->Fields("CELLPHONE NUMBER")."</td>";
  echo "<td>".$rs->Fields("HOME ADDRESS")."</td></tr>";
  $rs->MoveNext();
}
echo "</table>";

$sql ="SELECT * FROM ORDER";
$rs = $conn->Execute($sql);

echo "<table>";
echo "<tr><th>ORDER NUMBER</th><th>NAME</th><th>WEIGHT<tr><th>DATE</th></tr>";
while (!$rs->EOF) {
  echo "<tr><td>".$rs->Fields("ORDER NUMBER")."</td>";
  echo "<td>".$rs->Fields("NAME")."</td>";
  echo "<td>".$rs->Fields("WEIGHT")."</td></tr>";
  echo "<td>".$rs->Fields("DATE")."</td>";
  $rs->MoveNext();
}
echo "</table>";

$sql ="SELECT * FROM PRODUCT";
$rs = $conn->Execute($sql);

echo "<table>";
echo "<tr><th>CODE</th><th>NAME</th><th>TYPE<tr><th>COLOR<tr><th>SIZE<tr><th>SHAPE<tr><th>QUANTITY<tr><th>COST</th></tr>";
while (!$rs->EOF) {
  echo "<tr><td>".$rs->Fields("CODE")."</td>";
  echo "<td>".$rs->Fields("NAME")."</td>";
  echo "<td>".$rs->Fields("TYPE")."</td></tr>";
  echo "<td>".$rs->Fields("CODE")."</td>";
  echo "<td>".$rs->Fields("SIZE")."</td></tr>";
  echo "<td>".$rs->Fields("SHAPE")."</td></tr>";
  echo "<td>".$rs->Fields("QUANTITY")."</td>";
  echo "<td>".$rs->Fields("COST")."</td></tr>"; 
  $rs->MoveNext();
}
echo "</table>";

$sql ="SELECT * FROM SUPPLIER";
$rs = $conn->Execute($sql);

echo "<table>";
echo "<tr><th>ID</th><th>NAME</th><th>STATUS<tr><th>CITY</th></tr>";
while (!$rs->EOF) {
  echo "<tr><td>".$rs->Fields("ID")."</td>";
  echo "<td>".$rs->Fields("NAME")."</td>";
  echo "<td>".$rs->Fields("STATUS")."</td></tr>";
  echo "<td>".$rs->Fields("CITY")."</td>";
  $rs->MoveNext();
}
echo "</table>";

// Close the connection

$rs->Close();
$conn->Close();
?>



