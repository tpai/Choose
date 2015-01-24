#pragma strict

var isReading : boolean = false;

function ShowPaperUI (show : boolean) {
	var anim : Animator = GameObject.Find("PaperUI").GetComponent(Animator);
	// hide paper
	GetComponent(MeshRenderer).enabled = !show;
	// show paper ui
	anim.SetBool("show", show);
	// sfx
	if(isReading && !show || show) {
		isReading = false;
		audio.Play();
	}
	
	if(show) {
		isReading = true;
	}
}