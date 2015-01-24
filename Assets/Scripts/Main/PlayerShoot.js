#pragma strict

var isRead : boolean = false;
var isReading : boolean = false;
var paper : Transform;

function Update () {
	if (Input.GetKeyDown (KeyCode.E)) {

		var hit : RaycastHit;
		
		if(Physics.Raycast(transform.position, transform.forward, hit, 3f)){
			if(hit.transform.tag == "Paper") {
				isRead = true;
				paper = hit.transform;
				ShowPaperUI(!isReading);
			}
			else if(hit.transform.tag == "LDoor" || hit.transform.tag == "RDoor") {
				switch(hit.transform.tag) {
					case "LDoor":
						PlayerPrefs.SetInt("Door", 1);
						break;
					case "RDoor":
						PlayerPrefs.SetInt("Door", 2);
						break;
				}
				PlayerPrefs.SetInt("HowManyYouRead", ++PlayerPrefs.GetInt("HowManyYouRead"));
				PlayerPrefs.SetInt("NowStageIndex", PlayerPrefs.GetInt("NowStageIndex")+1);
				Application.LoadLevel(2);
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