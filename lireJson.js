export function selectSeq(int){
        var seq= {4:{"0":['yellow','yellow','yellow','yellow','yellow','yellow'],
"1":['blue','blue','blue','blue','blue','blue'],
"2":['red','red','red','red','red','red'],
"3":['yellow','yellow','yellow','yellow','yellow','blue'],
"4":['yellow','yellow','yellow','yellow','yellow','red'],
"5":['yellow','blue','blue','blue','blue','blue'],
"6":['yellow','red','red','red','red','red'],
"7":['blue','yellow','yellow','yellow','yellow','yellow'],
"8":['blue','blue','blue','blue','blue','yellow'],
"9":['blue','blue','blue','blue','blue','red'],
"10":['blue','red','red','red','red','red'],
"11":['red','yellow','yellow','yellow','yellow','yellow'],
"12":['red','blue','blue','blue','blue','blue'],
"13":['red','red','red','red','red','yellow'],
"14":['red','red','red','red','red','blue'],
"15":['yellow','yellow','yellow','yellow','blue','yellow'],
"16":['yellow','yellow','yellow','yellow','blue','blue'],
"17":['yellow','yellow','yellow','yellow','blue','red'],
"18":['yellow','yellow','yellow','yellow','red','yellow'],
"19":['yellow','yellow','yellow','yellow','red','blue'],
"20":['yellow','yellow','yellow','yellow','red','red'],
"21":['yellow','yellow','yellow','blue','blue','blue'],
"22":['yellow','yellow','yellow','red','red','red'],
"23":['yellow','yellow','blue','blue','blue','blue'],
"24":['yellow','yellow','red','red','red','red'],
"25":['yellow','blue','yellow','yellow','yellow','yellow'],
"26":['yellow','blue','blue','blue','blue','yellow'],
"27":['yellow','blue','blue','blue','blue','red'],
"28":['yellow','blue','red','yellow','blue','red'],
"29":['yellow','blue','red','red','blue','yellow'],
"30":['yellow','blue','red','red','red','red'],
"31":['yellow','red','yellow','yellow','yellow','yellow'],
"32":['yellow','red','blue','yellow','red','blue'],
"33":['yellow','red','blue','blue','blue','blue'],
"34":['yellow','red','blue','blue','red','yellow'],
"35":['yellow','red','red','red','red','yellow'],
"36":['yellow','red','red','red','red','blue'],
"37":['blue','yellow','yellow','yellow','yellow','blue'],
"38":['blue','yellow','yellow','yellow','yellow','red'],
"39":['blue','yellow','blue','blue','blue','blue'],
"40":['blue','yellow','red','blue','yellow','red'],
"41":['blue','yellow','red','red','yellow','blue'],
"42":['blue','yellow','red','red','red','red'],
"43":['blue','blue','yellow','yellow','yellow','yellow'],
"44":['blue','blue','blue','yellow','yellow','yellow'],
"45":['blue','blue','blue','blue','yellow','yellow'],
"46":['blue','blue','blue','blue','yellow','blue'],
"47":['blue','blue','blue','blue','yellow','red'],
"48":['blue','blue','blue','blue','red','yellow'],
"49":['blue','blue','blue','blue','red','blue'],
"50":['blue','blue','blue','blue','red','red'],
"51":['blue','blue','blue','red','red','red'],
"52":['blue','blue','red','red','red','red'],
"53":['blue','red','yellow','yellow','yellow','yellow'],
"54":['blue','red','yellow','yellow','red','blue'],
"55":['blue','red','yellow','blue','red','yellow'],
"56":['blue','red','blue','blue','blue','blue'],
"57":['blue','red','red','red','red','yellow'],
"58":['blue','red','red','red','red','blue'],
"59":['red','yellow','yellow','yellow','yellow','blue'],
"60":['red','yellow','yellow','yellow','yellow','red'],
"61":['red','yellow','blue','blue','yellow','red'],
"62":['red','yellow','blue','blue','blue','blue'],
"63":['red','yellow','blue','red','yellow','blue'],
"64":['red','yellow','red','red','red','red'],
"65":['red','blue','yellow','yellow','yellow','yellow'],
"66":['red','blue','yellow','yellow','blue','red'],
"67":['red','blue','yellow','red','blue','yellow'],
"68":['red','blue','blue','blue','blue','yellow'],
"69":['red','blue','blue','blue','blue','red'],
"70":['red','blue','red','red','red','red'],
"71":['red','red','yellow','yellow','yellow','yellow'],
"72":['red','red','blue','blue','blue','blue'],
"73":['red','red','red','yellow','yellow','yellow'],
"74":['red','red','red','blue','blue','blue'],
"75":['red','red','red','red','yellow','yellow'],
"76":['red','red','red','red','yellow','blue'],
"77":['red','red','red','red','yellow','red'],
"78":['red','red','red','red','blue','yellow'],
"79":['red','red','red','red','blue','blue'],
"80":['red','red','red','red','blue','red'],
},
"5":{"1224":['yellow','yellow','yellow','blue','yellow','yellow'],
"1225":['yellow','yellow','yellow','blue','yellow','blue'],
"1226":['yellow','yellow','yellow','blue','yellow','red'],
"1227":['yellow','yellow','yellow','blue','blue','yellow'],
"1228":['yellow','yellow','yellow','blue','blue','red'],
"1229":['yellow','yellow','yellow','blue','red','yellow'],
"1230":['yellow','yellow','yellow','blue','red','blue'],
"1231":['yellow','yellow','yellow','blue','red','red'],
"1232":['yellow','yellow','yellow','red','yellow','yellow'],
"1233":['yellow','yellow','yellow','red','yellow','blue'],
"1234":['yellow','yellow','yellow','red','yellow','red'],
"1235":['yellow','yellow','yellow','red','blue','yellow'],
"1236":['yellow','yellow','yellow','red','blue','blue'],
"1237":['yellow','yellow','yellow','red','blue','red'],
"1238":['yellow','yellow','yellow','red','red','yellow'],
"1239":['yellow','yellow','yellow','red','red','blue'],
"1240":['yellow','yellow','blue','yellow','yellow','yellow'],
"1241":['yellow','yellow','blue','yellow','yellow','blue'],
"1242":['yellow','yellow','blue','yellow','blue','yellow'],
"1243":['yellow','yellow','blue','yellow','blue','blue'],
"1244":['yellow','yellow','blue','yellow','blue','red'],
"1245":['yellow','yellow','blue','blue','yellow','yellow'],
"1246":['yellow','yellow','blue','blue','yellow','blue'],
"1247":['yellow','yellow','blue','blue','yellow','red'],
"1248":['yellow','yellow','blue','blue','blue','yellow'],
"1249":['yellow','yellow','blue','blue','blue','red'],
"1250":['yellow','yellow','blue','red','blue','red'],
"1251":['yellow','yellow','blue','red','red','blue'],
"1252":['yellow','yellow','blue','red','red','red'],
"1253":['yellow','yellow','red','yellow','yellow','yellow'],
"1254":['yellow','yellow','red','yellow','yellow','red'],
"1255":['yellow','yellow','red','yellow','red','yellow'],
"1256":['yellow','yellow','red','yellow','red','blue'],
"1257":['yellow','yellow','red','yellow','red','red'],
"1258":['yellow','yellow','red','blue','blue','blue'],
"1259":['yellow','yellow','red','blue','blue','red'],
"1260":['yellow','yellow','red','blue','red','blue'],
"1261":['yellow','yellow','red','red','yellow','yellow'],
"1262":['yellow','yellow','red','red','yellow','blue'],
"1263":['yellow','yellow','red','red','yellow','red'],
"1264":['yellow','yellow','red','red','red','yellow'],
"1265":['yellow','yellow','red','red','red','blue'],
"1266":['yellow','blue','yellow','yellow','yellow','blue'],
"1267":['yellow','blue','yellow','yellow','yellow','red'],
"1268":['yellow','blue','yellow','yellow','blue','yellow'],
"1269":['yellow','blue','yellow','yellow','blue','blue'],
"1270":['yellow','blue','yellow','yellow','blue','red'],
"1271":['yellow','blue','yellow','blue','yellow','yellow'],
"1272":['yellow','blue','yellow','blue','yellow','blue'],
"1273":['yellow','blue','yellow','blue','yellow','red'],
"1274":['yellow','blue','yellow','blue','blue','yellow'],
"1275":['yellow','blue','yellow','blue','blue','blue'],
"1276":['yellow','blue','yellow','blue','blue','red'],
"1277":['yellow','blue','yellow','blue','red','yellow'],
"1278":['yellow','blue','yellow','blue','red','blue'],
"1279":['yellow','blue','yellow','blue','red','red'],
"1280":['yellow','blue','yellow','red','yellow','red'],
"1281":['yellow','blue','yellow','red','red','yellow'],
"1282":['yellow','blue','yellow','red','red','red'],
"1283":['yellow','blue','blue','yellow','yellow','yellow'],
"1284":['yellow','blue','blue','yellow','yellow','blue'],
"1285":['yellow','blue','blue','yellow','yellow','red'],
"1286":['yellow','blue','blue','yellow','blue','yellow'],
"1287":['yellow','blue','blue','yellow','blue','blue'],
"1288":['yellow','blue','blue','yellow','blue','red'],
"1289":['yellow','blue','blue','yellow','red','yellow'],
"1290":['yellow','blue','blue','yellow','red','blue'],
"1291":['yellow','blue','blue','yellow','red','red'],
"1292":['yellow','blue','blue','blue','yellow','yellow'],
"1293":['yellow','blue','blue','blue','yellow','blue'],
"1294":['yellow','blue','blue','blue','yellow','red'],
"1295":['yellow','blue','blue','blue','red','yellow'],
"1296":['yellow','blue','blue','blue','red','blue'],
"1297":['yellow','blue','blue','blue','red','red'],
"1298":['yellow','blue','blue','red','blue','red'],
"1299":['yellow','blue','blue','red','red','blue'],
"1300":['yellow','blue','blue','red','red','red'],
"1301":['yellow','blue','red','yellow','yellow','yellow'],
"1302":['yellow','blue','red','yellow','yellow','red'],
"1303":['yellow','blue','red','yellow','red','yellow'],
"1304":['yellow','blue','red','blue','blue','blue'],
"1305":['yellow','blue','red','blue','blue','red'],
"1306":['yellow','blue','red','blue','red','yellow'],
"1307":['yellow','blue','red','blue','red','blue'],
"1308":['yellow','blue','red','blue','red','red'],
"1309":['yellow','blue','red','red','blue','blue'],
"1310":['yellow','blue','red','red','blue','red'],
"1311":['yellow','blue','red','red','red','yellow'],
"1312":['yellow','blue','red','red','red','blue'],
"1313":['yellow','red','yellow','yellow','yellow','blue'],
"1314":['yellow','red','yellow','yellow','yellow','red'],
"1315":['yellow','red','yellow','yellow','red','yellow'],
"1316":['yellow','red','yellow','yellow','red','blue'],
"1317":['yellow','red','yellow','yellow','red','red'],
"1318":['yellow','red','yellow','blue','yellow','blue'],
"1319":['yellow','red','yellow','blue','blue','yellow'],
"1320":['yellow','red','yellow','blue','blue','blue'],
"1321":['yellow','red','yellow','red','yellow','yellow'],
"1322":['yellow','red','yellow','red','yellow','blue'],
"1323":['yellow','red','yellow','red','yellow','red'],
"1324":['yellow','red','yellow','red','blue','yellow'],
"1325":['yellow','red','yellow','red','blue','blue'],
"1326":['yellow','red','yellow','red','blue','red'],
"1327":['yellow','red','yellow','red','red','yellow'],
"1328":['yellow','red','yellow','red','red','blue'],
"1329":['yellow','red','yellow','red','red','red'],
"1330":['yellow','red','blue','yellow','yellow','yellow'],
"1331":['yellow','red','blue','yellow','yellow','blue'],
"1332":['yellow','red','blue','yellow','blue','yellow'],
"1333":['yellow','red','blue','blue','blue','yellow'],
"1334":['yellow','red','blue','blue','blue','red'],
"1335":['yellow','red','blue','blue','red','blue'],
"1336":['yellow','red','blue','blue','red','red'],
"1337":['yellow','red','blue','red','blue','yellow'],
"1338":['yellow','red','blue','red','blue','blue'],
"1339":['yellow','red','blue','red','blue','red'],
"1340":['yellow','red','blue','red','red','blue'],
"1341":['yellow','red','blue','red','red','red'],
"1342":['yellow','red','red','yellow','yellow','yellow'],
"1343":['yellow','red','red','yellow','yellow','blue'],
"1344":['yellow','red','red','yellow','yellow','red'],
"1345":['yellow','red','red','yellow','blue','yellow'],
"1346":['yellow','red','red','yellow','blue','blue'],
"1347":['yellow','red','red','yellow','blue','red'],
"1348":['yellow','red','red','yellow','red','yellow'],
"1349":['yellow','red','red','yellow','red','blue'],
"1350":['yellow','red','red','yellow','red','red'],
"1351":['yellow','red','red','blue','blue','blue'],
"1352":['yellow','red','red','blue','blue','red'],
"1353":['yellow','red','red','blue','red','blue'],
"1354":['yellow','red','red','red','yellow','yellow'],
"1355":['yellow','red','red','red','yellow','blue'],
"1356":['yellow','red','red','red','yellow','red'],
"1357":['yellow','red','red','red','blue','yellow'],
"1358":['yellow','red','red','red','blue','blue'],
"1359":['yellow','red','red','red','blue','red'],
"1360":['blue','yellow','yellow','yellow','blue','yellow'],
"1361":['blue','yellow','yellow','yellow','blue','blue'],
"1362":['blue','yellow','yellow','yellow','blue','red'],
"1363":['blue','yellow','yellow','yellow','red','yellow'],
"1364":['blue','yellow','yellow','yellow','red','blue'],
"1365":['blue','yellow','yellow','yellow','red','red'],
"1366":['blue','yellow','yellow','blue','yellow','yellow'],
"1367":['blue','yellow','yellow','blue','yellow','blue'],
"1368":['blue','yellow','yellow','blue','yellow','red'],
"1369":['blue','yellow','yellow','blue','blue','yellow'],
"1370":['blue','yellow','yellow','blue','blue','blue'],
"1371":['blue','yellow','yellow','blue','blue','red'],
"1372":['blue','yellow','yellow','blue','red','yellow'],
"1373":['blue','yellow','yellow','blue','red','blue'],
"1374":['blue','yellow','yellow','blue','red','red'],
"1375":['blue','yellow','yellow','red','yellow','red'],
"1376":['blue','yellow','yellow','red','red','yellow'],
"1377":['blue','yellow','yellow','red','red','red'],
"1378":['blue','yellow','blue','yellow','yellow','yellow'],
"1379":['blue','yellow','blue','yellow','yellow','blue'],
"1380":['blue','yellow','blue','yellow','yellow','red'],
"1381":['blue','yellow','blue','yellow','blue','yellow'],
"1382":['blue','yellow','blue','yellow','blue','blue'],
"1383":['blue','yellow','blue','yellow','blue','red'],
"1384":['blue','yellow','blue','yellow','red','yellow'],
"1385":['blue','yellow','blue','yellow','red','blue'],
"1386":['blue','yellow','blue','yellow','red','red'],
"1387":['blue','yellow','blue','blue','yellow','yellow'],
"1388":['blue','yellow','blue','blue','yellow','blue'],
"1389":['blue','yellow','blue','blue','yellow','red'],
"1390":['blue','yellow','blue','blue','blue','yellow'],
"1391":['blue','yellow','blue','blue','blue','red'],
"1392":['blue','yellow','blue','red','blue','red'],
"1393":['blue','yellow','blue','red','red','blue'],
"1394":['blue','yellow','blue','red','red','red'],
"1395":['blue','yellow','red','yellow','yellow','yellow'],
"1396":['blue','yellow','red','yellow','yellow','red'],
"1397":['blue','yellow','red','yellow','red','yellow'],
"1398":['blue','yellow','red','yellow','red','blue'],
"1399":['blue','yellow','red','yellow','red','red'],
"1400":['blue','yellow','red','blue','blue','blue'],
"1401":['blue','yellow','red','blue','blue','red'],
"1402":['blue','yellow','red','blue','red','blue'],
"1403":['blue','yellow','red','red','yellow','yellow'],
"1404":['blue','yellow','red','red','yellow','red'],
"1405":['blue','yellow','red','red','red','yellow'],
"1406":['blue','yellow','red','red','red','blue'],
"1407":['blue','blue','yellow','yellow','yellow','blue'],
"1408":['blue','blue','yellow','yellow','yellow','red'],
"1409":['blue','blue','yellow','yellow','blue','yellow'],
"1410":['blue','blue','yellow','yellow','blue','blue'],
"1411":['blue','blue','yellow','yellow','blue','red'],
"1412":['blue','blue','yellow','blue','yellow','yellow'],
"1413":['blue','blue','yellow','blue','yellow','blue'],
"1414":['blue','blue','yellow','blue','yellow','red'],
"1415":['blue','blue','yellow','blue','blue','yellow'],
"1416":['blue','blue','yellow','blue','blue','blue'],
"1417":['blue','blue','yellow','red','yellow','red'],
"1418":['blue','blue','yellow','red','red','yellow'],
"1419":['blue','blue','yellow','red','red','red'],
"1420":['blue','blue','blue','yellow','yellow','blue'],
"1421":['blue','blue','blue','yellow','yellow','red'],
"1422":['blue','blue','blue','yellow','blue','yellow'],
"1423":['blue','blue','blue','yellow','blue','blue'],
"1424":['blue','blue','blue','yellow','blue','red'],
"1425":['blue','blue','blue','yellow','red','yellow'],
"1426":['blue','blue','blue','yellow','red','blue'],
"1427":['blue','blue','blue','yellow','red','red'],
"1428":['blue','blue','blue','red','yellow','yellow'],
"1429":['blue','blue','blue','red','yellow','blue'],
"1430":['blue','blue','blue','red','yellow','red'],
"1431":['blue','blue','blue','red','blue','yellow'],
"1432":['blue','blue','blue','red','blue','blue'],
"1433":['blue','blue','blue','red','blue','red'],
"1434":['blue','blue','blue','red','red','yellow'],
"1435":['blue','blue','blue','red','red','blue'],
"1436":['blue','blue','red','yellow','yellow','yellow'],
"1437":['blue','blue','red','yellow','yellow','red'],
"1438":['blue','blue','red','yellow','red','yellow'],
"1439":['blue','blue','red','blue','blue','blue'],
"1440":['blue','blue','red','blue','blue','red'],
"1441":['blue','blue','red','blue','red','yellow'],
"1442":['blue','blue','red','blue','red','blue'],
"1443":['blue','blue','red','blue','red','red'],
"1444":['blue','blue','red','red','blue','yellow'],
"1445":['blue','blue','red','red','blue','blue'],
"1446":['blue','blue','red','red','blue','red'],
"1447":['blue','blue','red','red','red','yellow'],
"1448":['blue','blue','red','red','red','blue'],
"1449":['blue','red','yellow','yellow','yellow','blue'],
"1450":['blue','red','yellow','yellow','yellow','red'],
"1451":['blue','red','yellow','yellow','red','yellow'],
"1452":['blue','red','yellow','yellow','red','red'],
"1453":['blue','red','yellow','blue','yellow','blue'],
"1454":['blue','red','yellow','blue','blue','yellow'],
"1455":['blue','red','yellow','blue','blue','blue'],
"1456":['blue','red','yellow','red','yellow','yellow'],
"1457":['blue','red','yellow','red','yellow','blue'],
"1458":['blue','red','yellow','red','yellow','red'],
"1459":['blue','red','yellow','red','red','yellow'],
"1460":['blue','red','yellow','red','red','red'],
"1461":['blue','red','blue','yellow','yellow','yellow'],
"1462":['blue','red','blue','yellow','yellow','blue'],
"1463":['blue','red','blue','yellow','blue','yellow'],
"1464":['blue','red','blue','blue','blue','yellow'],
"1465":['blue','red','blue','blue','blue','red'],
"1466":['blue','red','blue','blue','red','yellow'],
"1467":['blue','red','blue','blue','red','blue'],
"1468":['blue','red','blue','blue','red','red'],
"1469":['blue','red','blue','red','yellow','yellow'],
"1470":['blue','red','blue','red','yellow','blue'],
"1471":['blue','red','blue','red','yellow','red'],
"1472":['blue','red','blue','red','blue','yellow'],
"1473":['blue','red','blue','red','blue','blue'],
"1474":['blue','red','blue','red','blue','red'],
"1475":['blue','red','blue','red','red','yellow'],
"1476":['blue','red','blue','red','red','blue'],
"1477":['blue','red','blue','red','red','red'],
"1478":['blue','red','red','yellow','yellow','yellow'],
"1479":['blue','red','red','yellow','yellow','red'],
"1480":['blue','red','red','yellow','red','yellow'],
"1481":['blue','red','red','blue','yellow','yellow'],
"1482":['blue','red','red','blue','yellow','blue'],
"1483":['blue','red','red','blue','yellow','red'],
"1484":['blue','red','red','blue','blue','yellow'],
"1485":['blue','red','red','blue','blue','blue'],
"1486":['blue','red','red','blue','blue','red'],
"1487":['blue','red','red','blue','red','yellow'],
"1488":['blue','red','red','blue','red','blue'],
"1489":['blue','red','red','blue','red','red'],
"1490":['blue','red','red','red','yellow','yellow'],
"1491":['blue','red','red','red','yellow','blue'],
"1492":['blue','red','red','red','yellow','red'],
"1493":['blue','red','red','red','blue','yellow'],
"1494":['blue','red','red','red','blue','blue'],
"1495":['blue','red','red','red','blue','red'],
"1496":['red','yellow','yellow','yellow','blue','yellow'],
"1497":['red','yellow','yellow','yellow','blue','blue'],
"1498":['red','yellow','yellow','yellow','blue','red'],
"1499":['red','yellow','yellow','yellow','red','yellow'],
"1500":['red','yellow','yellow','yellow','red','blue'],
"1501":['red','yellow','yellow','yellow','red','red'],
"1502":['red','yellow','yellow','blue','yellow','blue'],
"1503":['red','yellow','yellow','blue','blue','yellow'],
"1504":['red','yellow','yellow','blue','blue','blue'],
"1505":['red','yellow','yellow','red','yellow','yellow'],
"1506":['red','yellow','yellow','red','yellow','blue'],
"1507":['red','yellow','yellow','red','yellow','red'],
"1508":['red','yellow','yellow','red','blue','yellow'],
"1509":['red','yellow','yellow','red','blue','blue'],
"1510":['red','yellow','yellow','red','blue','red'],
"1511":['red','yellow','yellow','red','red','yellow'],
"1512":['red','yellow','yellow','red','red','blue'],
"1513":['red','yellow','yellow','red','red','red'],
"1514":['red','yellow','blue','yellow','yellow','yellow'],
"1515":['red','yellow','blue','yellow','yellow','blue'],
"1516":['red','yellow','blue','yellow','blue','yellow'],
"1517":['red','yellow','blue','yellow','blue','blue'],
"1518":['red','yellow','blue','yellow','blue','red'],
"1519":['red','yellow','blue','blue','yellow','yellow'],
"1520":['red','yellow','blue','blue','yellow','blue'],
"1521":['red','yellow','blue','blue','blue','yellow'],
"1522":['red','yellow','blue','blue','blue','red'],
"1523":['red','yellow','blue','red','blue','red'],
"1524":['red','yellow','blue','red','red','blue'],
"1525":['red','yellow','blue','red','red','red'],
"1526":['red','yellow','red','yellow','yellow','yellow'],
"1527":['red','yellow','red','yellow','yellow','blue'],
"1528":['red','yellow','red','yellow','yellow','red'],
"1529":['red','yellow','red','yellow','blue','yellow'],
"1530":['red','yellow','red','yellow','blue','blue'],
"1531":['red','yellow','red','yellow','blue','red'],
"1532":['red','yellow','red','yellow','red','yellow'],
"1533":['red','yellow','red','yellow','red','blue'],
"1534":['red','yellow','red','yellow','red','red'],
"1535":['red','yellow','red','blue','blue','blue'],
"1536":['red','yellow','red','blue','blue','red'],
"1537":['red','yellow','red','blue','red','blue'],
"1538":['red','yellow','red','red','yellow','yellow'],
"1539":['red','yellow','red','red','yellow','blue'],
"1540":['red','yellow','red','red','yellow','red'],
"1541":['red','yellow','red','red','red','yellow'],
"1542":['red','yellow','red','red','red','blue'],
"1543":['red','blue','yellow','yellow','yellow','blue'],
"1544":['red','blue','yellow','yellow','yellow','red'],
"1545":['red','blue','yellow','yellow','blue','yellow'],
"1546":['red','blue','yellow','yellow','blue','blue'],
"1547":['red','blue','yellow','blue','yellow','yellow'],
"1548":['red','blue','yellow','blue','yellow','blue'],
"1549":['red','blue','yellow','blue','yellow','red'],
"1550":['red','blue','yellow','blue','blue','yellow'],
"1551":['red','blue','yellow','blue','blue','blue'],
"1552":['red','blue','yellow','red','yellow','red'],
"1553":['red','blue','yellow','red','red','yellow'],
"1554":['red','blue','yellow','red','red','red'],
"1555":['red','blue','blue','yellow','yellow','yellow'],
"1556":['red','blue','blue','yellow','yellow','blue'],
"1557":['red','blue','blue','yellow','blue','yellow'],
"1558":['red','blue','blue','blue','yellow','yellow'],
"1559":['red','blue','blue','blue','yellow','blue'],
"1560":['red','blue','blue','blue','yellow','red'],
"1561":['red','blue','blue','blue','red','yellow'],
"1562":['red','blue','blue','blue','red','blue'],
"1563":['red','blue','blue','blue','red','red'],
"1564":['red','blue','blue','red','yellow','yellow'],
"1565":['red','blue','blue','red','yellow','blue'],
"1566":['red','blue','blue','red','yellow','red'],
"1567":['red','blue','blue','red','blue','yellow'],
"1568":['red','blue','blue','red','blue','blue'],
"1569":['red','blue','blue','red','blue','red'],
"1570":['red','blue','blue','red','red','yellow'],
"1571":['red','blue','blue','red','red','blue'],
"1572":['red','blue','blue','red','red','red'],
"1573":['red','blue','red','yellow','yellow','yellow'],
"1574":['red','blue','red','yellow','yellow','red'],
"1575":['red','blue','red','yellow','red','yellow'],
"1576":['red','blue','red','blue','yellow','yellow'],
"1577":['red','blue','red','blue','yellow','blue'],
"1578":['red','blue','red','blue','yellow','red'],
"1579":['red','blue','red','blue','blue','yellow'],
"1580":['red','blue','red','blue','blue','blue'],
"1581":['red','blue','red','blue','blue','red'],
"1582":['red','blue','red','blue','red','yellow'],
"1583":['red','blue','red','blue','red','blue'],
"1584":['red','blue','red','blue','red','red'],
"1585":['red','blue','red','red','blue','yellow'],
"1586":['red','blue','red','red','blue','blue'],
"1587":['red','blue','red','red','blue','red'],
"1588":['red','blue','red','red','red','yellow'],
"1589":['red','blue','red','red','red','blue'],
"1590":['red','red','yellow','yellow','yellow','blue'],
"1591":['red','red','yellow','yellow','yellow','red'],
"1592":['red','red','yellow','yellow','red','yellow'],
"1593":['red','red','yellow','yellow','red','blue'],
"1594":['red','red','yellow','yellow','red','red'],
"1595":['red','red','yellow','blue','yellow','blue'],
"1596":['red','red','yellow','blue','blue','yellow'],
"1597":['red','red','yellow','blue','blue','blue'],
"1598":['red','red','yellow','red','yellow','yellow'],
"1599":['red','red','yellow','red','yellow','blue'],
"1600":['red','red','yellow','red','yellow','red'],
"1601":['red','red','yellow','red','red','yellow'],
"1602":['red','red','yellow','red','red','red'],
"1603":['red','red','blue','yellow','yellow','yellow'],
"1604":['red','red','blue','yellow','yellow','blue'],
"1605":['red','red','blue','yellow','blue','yellow'],
"1606":['red','red','blue','blue','blue','yellow'],
"1607":['red','red','blue','blue','blue','red'],
"1608":['red','red','blue','blue','red','yellow'],
"1609":['red','red','blue','blue','red','blue'],
"1610":['red','red','blue','blue','red','red'],
"1611":['red','red','blue','red','blue','yellow'],
"1612":['red','red','blue','red','blue','blue'],
"1613":['red','red','blue','red','blue','red'],
"1614":['red','red','blue','red','red','blue'],
"1615":['red','red','blue','red','red','red'],
"1616":['red','red','red','yellow','yellow','blue'],
"1617":['red','red','red','yellow','yellow','red'],
"1618":['red','red','red','yellow','blue','yellow'],
"1619":['red','red','red','yellow','blue','blue'],
"1620":['red','red','red','yellow','blue','red'],
"1621":['red','red','red','yellow','red','yellow'],
"1622":['red','red','red','yellow','red','blue'],
"1623":['red','red','red','yellow','red','red'],
"1624":['red','red','red','blue','yellow','yellow'],
"1625":['red','red','red','blue','yellow','blue'],
"1626":['red','red','red','blue','yellow','red'],
"1627":['red','red','red','blue','blue','yellow'],
"1628":['red','red','red','blue','blue','red'],
"1629":['red','red','red','blue','red','yellow'],
"1630":['red','red','red','blue','red','blue'],
"1631":['red','red','red','blue','red','red'],
},
"6":{"960":['yellow','yellow','blue','yellow','yellow','red'],
"961":['yellow','yellow','blue','yellow','red','yellow'],
"962":['yellow','yellow','blue','yellow','red','blue'],
"963":['yellow','yellow','blue','yellow','red','red'],
"964":['yellow','yellow','blue','blue','red','yellow'],
"965":['yellow','yellow','blue','blue','red','blue'],
"966":['yellow','yellow','blue','blue','red','red'],
"967":['yellow','yellow','blue','red','yellow','yellow'],
"968":['yellow','yellow','blue','red','yellow','blue'],
"969":['yellow','yellow','blue','red','yellow','red'],
"970":['yellow','yellow','blue','red','blue','yellow'],
"971":['yellow','yellow','blue','red','blue','blue'],
"972":['yellow','yellow','blue','red','red','yellow'],
"973":['yellow','yellow','red','yellow','yellow','blue'],
"974":['yellow','yellow','red','yellow','blue','yellow'],
"975":['yellow','yellow','red','yellow','blue','blue'],
"976":['yellow','yellow','red','yellow','blue','red'],
"977":['yellow','yellow','red','blue','yellow','yellow'],
"978":['yellow','yellow','red','blue','yellow','blue'],
"979":['yellow','yellow','red','blue','yellow','red'],
"980":['yellow','yellow','red','blue','blue','yellow'],
"981":['yellow','yellow','red','blue','red','yellow'],
"982":['yellow','yellow','red','blue','red','red'],
"983":['yellow','yellow','red','red','blue','yellow'],
"984":['yellow','yellow','red','red','blue','blue'],
"985":['yellow','yellow','red','red','blue','red'],
"986":['yellow','blue','yellow','yellow','red','yellow'],
"987":['yellow','blue','yellow','yellow','red','blue'],
"988":['yellow','blue','yellow','yellow','red','red'],
"989":['yellow','blue','yellow','red','yellow','yellow'],
"990":['yellow','blue','yellow','red','yellow','blue'],
"991":['yellow','blue','yellow','red','blue','yellow'],
"992":['yellow','blue','yellow','red','blue','blue'],
"993":['yellow','blue','yellow','red','blue','red'],
"994":['yellow','blue','yellow','red','red','blue'],
"995":['yellow','blue','blue','red','yellow','yellow'],
"996":['yellow','blue','blue','red','yellow','blue'],
"997":['yellow','blue','blue','red','yellow','red'],
"998":['yellow','blue','blue','red','blue','yellow'],
"999":['yellow','blue','blue','red','blue','blue'],
"1000":['yellow','blue','blue','red','red','yellow'],
"1001":['yellow','blue','red','yellow','yellow','blue'],
"1002":['yellow','blue','red','yellow','blue','yellow'],
"1003":['yellow','blue','red','yellow','blue','blue'],
"1004":['yellow','blue','red','yellow','red','blue'],
"1005":['yellow','blue','red','yellow','red','red'],
"1006":['yellow','blue','red','blue','yellow','yellow'],
"1007":['yellow','blue','red','blue','yellow','blue'],
"1008":['yellow','blue','red','blue','yellow','red'],
"1009":['yellow','blue','red','blue','blue','yellow'],
"1010":['yellow','blue','red','red','yellow','yellow'],
"1011":['yellow','blue','red','red','yellow','blue'],
"1012":['yellow','blue','red','red','yellow','red'],
"1013":['yellow','red','yellow','yellow','blue','yellow'],
"1014":['yellow','red','yellow','yellow','blue','blue'],
"1015":['yellow','red','yellow','yellow','blue','red'],
"1016":['yellow','red','yellow','blue','yellow','yellow'],
"1017":['yellow','red','yellow','blue','yellow','red'],
"1018":['yellow','red','yellow','blue','blue','red'],
"1019":['yellow','red','yellow','blue','red','yellow'],
"1020":['yellow','red','yellow','blue','red','blue'],
"1021":['yellow','red','yellow','blue','red','red'],
"1022":['yellow','red','blue','yellow','yellow','red'],
"1023":['yellow','red','blue','yellow','blue','blue'],
"1024":['yellow','red','blue','yellow','blue','red'],
"1025":['yellow','red','blue','yellow','red','yellow'],
"1026":['yellow','red','blue','yellow','red','red'],
"1027":['yellow','red','blue','blue','yellow','yellow'],
"1028":['yellow','red','blue','blue','yellow','blue'],
"1029":['yellow','red','blue','blue','yellow','red'],
"1030":['yellow','red','blue','red','yellow','yellow'],
"1031":['yellow','red','blue','red','yellow','blue'],
"1032":['yellow','red','blue','red','yellow','red'],
"1033":['yellow','red','blue','red','red','yellow'],
"1034":['yellow','red','red','blue','yellow','yellow'],
"1035":['yellow','red','red','blue','yellow','blue'],
"1036":['yellow','red','red','blue','yellow','red'],
"1037":['yellow','red','red','blue','blue','yellow'],
"1038":['yellow','red','red','blue','red','yellow'],
"1039":['yellow','red','red','blue','red','red'],
"1040":['blue','yellow','yellow','red','yellow','yellow'],
"1041":['blue','yellow','yellow','red','yellow','blue'],
"1042":['blue','yellow','yellow','red','blue','yellow'],
"1043":['blue','yellow','yellow','red','blue','blue'],
"1044":['blue','yellow','yellow','red','blue','red'],
"1045":['blue','yellow','yellow','red','red','blue'],
"1046":['blue','yellow','blue','blue','red','yellow'],
"1047":['blue','yellow','blue','blue','red','blue'],
"1048":['blue','yellow','blue','blue','red','red'],
"1049":['blue','yellow','blue','red','yellow','yellow'],
"1050":['blue','yellow','blue','red','yellow','blue'],
"1051":['blue','yellow','blue','red','yellow','red'],
"1052":['blue','yellow','blue','red','blue','yellow'],
"1053":['blue','yellow','blue','red','blue','blue'],
"1054":['blue','yellow','blue','red','red','yellow'],
"1055":['blue','yellow','red','yellow','yellow','blue'],
"1056":['blue','yellow','red','yellow','blue','yellow'],
"1057":['blue','yellow','red','yellow','blue','blue'],
"1058":['blue','yellow','red','yellow','blue','red'],
"1059":['blue','yellow','red','blue','yellow','yellow'],
"1060":['blue','yellow','red','blue','yellow','blue'],
"1061":['blue','yellow','red','blue','blue','yellow'],
"1062":['blue','yellow','red','blue','red','yellow'],
"1063":['blue','yellow','red','blue','red','red'],
"1064":['blue','yellow','red','red','blue','yellow'],
"1065":['blue','yellow','red','red','blue','blue'],
"1066":['blue','yellow','red','red','blue','red'],
"1067":['blue','blue','yellow','yellow','red','yellow'],
"1068":['blue','blue','yellow','yellow','red','blue'],
"1069":['blue','blue','yellow','yellow','red','red'],
"1070":['blue','blue','yellow','blue','blue','red'],
"1071":['blue','blue','yellow','blue','red','yellow'],
"1072":['blue','blue','yellow','blue','red','blue'],
"1073":['blue','blue','yellow','blue','red','red'],
"1074":['blue','blue','yellow','red','yellow','yellow'],
"1075":['blue','blue','yellow','red','yellow','blue'],
"1076":['blue','blue','yellow','red','blue','yellow'],
"1077":['blue','blue','yellow','red','blue','blue'],
"1078":['blue','blue','yellow','red','blue','red'],
"1079":['blue','blue','yellow','red','red','blue'],
"1080":['blue','blue','red','yellow','yellow','blue'],
"1081":['blue','blue','red','yellow','blue','yellow'],
"1082":['blue','blue','red','yellow','blue','blue'],
"1083":['blue','blue','red','yellow','blue','red'],
"1084":['blue','blue','red','yellow','red','blue'],
"1085":['blue','blue','red','yellow','red','red'],
"1086":['blue','blue','red','blue','yellow','yellow'],
"1087":['blue','blue','red','blue','yellow','blue'],
"1088":['blue','blue','red','blue','yellow','red'],
"1089":['blue','blue','red','blue','blue','yellow'],
"1090":['blue','blue','red','red','yellow','yellow'],
"1091":['blue','blue','red','red','yellow','blue'],
"1092":['blue','blue','red','red','yellow','red'],
"1093":['blue','red','yellow','yellow','blue','yellow'],
"1094":['blue','red','yellow','yellow','blue','blue'],
"1095":['blue','red','yellow','yellow','blue','red'],
"1096":['blue','red','yellow','blue','yellow','yellow'],
"1097":['blue','red','yellow','blue','yellow','red'],
"1098":['blue','red','yellow','blue','blue','red'],
"1099":['blue','red','yellow','blue','red','blue'],
"1100":['blue','red','yellow','blue','red','red'],
"1101":['blue','red','yellow','red','blue','yellow'],
"1102":['blue','red','yellow','red','blue','blue'],
"1103":['blue','red','yellow','red','blue','red'],
"1104":['blue','red','yellow','red','red','blue'],
"1105":['blue','red','blue','yellow','yellow','red'],
"1106":['blue','red','blue','yellow','blue','blue'],
"1107":['blue','red','blue','yellow','blue','red'],
"1108":['blue','red','blue','yellow','red','yellow'],
"1109":['blue','red','blue','yellow','red','blue'],
"1110":['blue','red','blue','yellow','red','red'],
"1111":['blue','red','blue','blue','yellow','yellow'],
"1112":['blue','red','blue','blue','yellow','blue'],
"1113":['blue','red','blue','blue','yellow','red'],
"1114":['blue','red','red','yellow','yellow','blue'],
"1115":['blue','red','red','yellow','blue','yellow'],
"1116":['blue','red','red','yellow','blue','blue'],
"1117":['blue','red','red','yellow','blue','red'],
"1118":['blue','red','red','yellow','red','blue'],
"1119":['blue','red','red','yellow','red','red'],
"1120":['red','yellow','yellow','blue','yellow','yellow'],
"1121":['red','yellow','yellow','blue','yellow','red'],
"1122":['red','yellow','yellow','blue','blue','red'],
"1123":['red','yellow','yellow','blue','red','yellow'],
"1124":['red','yellow','yellow','blue','red','blue'],
"1125":['red','yellow','yellow','blue','red','red'],
"1126":['red','yellow','blue','yellow','yellow','red'],
"1127":['red','yellow','blue','yellow','red','yellow'],
"1128":['red','yellow','blue','yellow','red','blue'],
"1129":['red','yellow','blue','yellow','red','red'],
"1130":['red','yellow','blue','blue','red','yellow'],
"1131":['red','yellow','blue','blue','red','blue'],
"1132":['red','yellow','blue','blue','red','red'],
"1133":['red','yellow','blue','red','yellow','yellow'],
"1134":['red','yellow','blue','red','yellow','red'],
"1135":['red','yellow','blue','red','blue','yellow'],
"1136":['red','yellow','blue','red','blue','blue'],
"1137":['red','yellow','blue','red','red','yellow'],
"1138":['red','yellow','red','blue','yellow','yellow'],
"1139":['red','yellow','red','blue','yellow','blue'],
"1140":['red','yellow','red','blue','yellow','red'],
"1141":['red','yellow','red','blue','blue','yellow'],
"1142":['red','yellow','red','blue','red','yellow'],
"1143":['red','yellow','red','blue','red','red'],
"1144":['red','yellow','red','red','blue','yellow'],
"1145":['red','yellow','red','red','blue','blue'],
"1146":['red','yellow','red','red','blue','red'],
"1147":['red','blue','yellow','yellow','red','yellow'],
"1148":['red','blue','yellow','yellow','red','blue'],
"1149":['red','blue','yellow','yellow','red','red'],
"1150":['red','blue','yellow','blue','blue','red'],
"1151":['red','blue','yellow','blue','red','yellow'],
"1152":['red','blue','yellow','blue','red','blue'],
"1153":['red','blue','yellow','blue','red','red'],
"1154":['red','blue','yellow','red','yellow','yellow'],
"1155":['red','blue','yellow','red','yellow','blue'],
"1156":['red','blue','yellow','red','blue','blue'],
"1157":['red','blue','yellow','red','blue','red'],
"1158":['red','blue','yellow','red','red','blue'],
"1159":['red','blue','blue','yellow','yellow','red'],
"1160":['red','blue','blue','yellow','blue','blue'],
"1161":['red','blue','blue','yellow','blue','red'],
"1162":['red','blue','blue','yellow','red','yellow'],
"1163":['red','blue','blue','yellow','red','blue'],
"1164":['red','blue','blue','yellow','red','red'],
"1165":['red','blue','red','yellow','yellow','blue'],
"1166":['red','blue','red','yellow','blue','yellow'],
"1167":['red','blue','red','yellow','blue','blue'],
"1168":['red','blue','red','yellow','blue','red'],
"1169":['red','blue','red','yellow','red','blue'],
"1170":['red','blue','red','yellow','red','red'],
"1171":['red','blue','red','red','yellow','yellow'],
"1172":['red','blue','red','red','yellow','blue'],
"1173":['red','blue','red','red','yellow','red'],
"1174":['red','red','yellow','yellow','blue','yellow'],
"1175":['red','red','yellow','yellow','blue','blue'],
"1176":['red','red','yellow','yellow','blue','red'],
"1177":['red','red','yellow','blue','yellow','yellow'],
"1178":['red','red','yellow','blue','yellow','red'],
"1179":['red','red','yellow','blue','blue','red'],
"1180":['red','red','yellow','blue','red','yellow'],
"1181":['red','red','yellow','blue','red','blue'],
"1182":['red','red','yellow','blue','red','red'],
"1183":['red','red','yellow','red','blue','yellow'],
"1184":['red','red','yellow','red','blue','blue'],
"1185":['red','red','yellow','red','blue','red'],
"1186":['red','red','yellow','red','red','blue'],
"1187":['red','red','blue','yellow','yellow','red'],
"1188":['red','red','blue','yellow','blue','blue'],
"1189":['red','red','blue','yellow','blue','red'],
"1190":['red','red','blue','yellow','red','yellow'],
"1191":['red','red','blue','yellow','red','blue'],
"1192":['red','red','blue','yellow','red','red'],
"1193":['red','red','blue','blue','yellow','yellow'],
"1194":['red','red','blue','blue','yellow','blue'],
"1195":['red','red','blue','blue','yellow','red'],
"1196":['red','red','blue','red','yellow','yellow'],
"1197":['red','red','blue','red','yellow','blue'],
"1198":['red','red','blue','red','yellow','red'],
"1199":['red','red','blue','red','red','yellow']}}

        var i;
        console.log(int)
        switch(int){

            
            case 4:
                i =  Math.floor(Math.random()*81);
                break;
            case 5:
                i= 1224 + Math.floor(Math.random()*407);
                break;
            case 6 :
                i = 960 + Math.floor(Math.random()*239);
        }
        return seq[int][i];
    }
