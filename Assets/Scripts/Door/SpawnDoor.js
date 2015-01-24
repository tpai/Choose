#pragma strict

var anim : Animator;
var door : GameObject [];

function Start () {
	Instantiate(door[PlayerPrefs.GetInt("Door")-1]);
	anim = GetComponent(Animator);
	anim.enabled = true;
}