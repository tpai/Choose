#pragma strict

import SimpleJSON;
import UnityEngine.UI;

var isRead : boolean = false;
var isReading : boolean = false;
var paper : Transform;

var stories : JSONArray;
var json : JSONNode;
var data : TextAsset;
var index : int;

function Start () {
	data = Resources.Load.<TextAsset>("Stories");
	json = JSON.Parse(data.text);
	stories = json["Stories"].AsArray;
	index = PlayerPrefs.GetInt("NowStageIndex");
	Debug.Log(index);
}

function Update () {
	if (Input.GetKeyDown (KeyCode.E)) {

		var hit : RaycastHit;
		
		if(Physics.Raycast(transform.position, transform.forward, hit, 3f)){
			
			var targetTag : String = hit.transform.tag;
			
			if(targetTag == "Paper") {
				isRead = true;
				paper = hit.transform;
				ShowPaperUI(!isReading);
			}
			else if(targetTag == "LDoor" || targetTag == "RDoor") {
				switch(targetTag) {
					case "LDoor":
						PlayerPrefs.SetInt("Door", 1);
						break;
					case "RDoor":
						PlayerPrefs.SetInt("Door", 2);
						break;
				}
				// next question
				PlayerPrefs.SetInt("NowStageIndex", PlayerPrefs.GetInt("NowStageIndex")+1);
				// go to scene
				if(index == stories.Count)
					Application.LoadLevel(4);
				if(targetTag == stories[index]["Answer"])
					Application.LoadLevel(2);
				else
					Application.LoadLevel(3);
			}
			else {
				ShowPaperUI(false);
			}
		}
		else {
//			Debug.Log ("No Shoot!");
			ShowPaperUI(false);
		}
	}

	Debug.DrawRay (transform.position, transform.forward * 3, Color.green);
}

function ShowPaperUI (show : boolean) {
	isReading = show;
	if(paper != null) {
		paper.SendMessage("ShowPaperUI", show);
		transform.parent.SendMessage("SetControllable", !show);
	}
}