#pragma strict

var doorId : int;
var door : GameObject [];

function Start () {
	doorId = PlayerPrefs.GetInt("Door");
	
	if(doorId != 0) {
		var obj : GameObject = Instantiate(door[doorId-1]);
		obj.transform.parent = transform;
		obj.transform.localPosition = Vector3.zero;
		obj.transform.localRotation = Quaternion.identity;
	}
}