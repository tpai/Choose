#pragma strict

import SimpleJSON;
import UnityEngine.UI;

function Start () {
	var data : TextAsset = Resources.Load.<TextAsset>("Stories");
	var json : JSONNode = JSON.Parse(data.text);
	var stories : JSONArray = json["Stories"].AsArray;
	
	for(var i=0;i<stories.Count;i++) {
		PlayerPrefs.SetString("Result", PlayerPrefs.GetString("Result")+PlayerPrefs.GetString("Q"+i));
	}
	
	GetComponent(Text).text = PlayerPrefs.GetString("Result");
}