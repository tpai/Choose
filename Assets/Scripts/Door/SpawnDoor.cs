using UnityEngine;
using System.Collections;

[System.Serializable]
public partial class SpawnDoor : MonoBehaviour
{
    public Animator anim;
    public GameObject[] door;
    public virtual void Start()
    {
        UnityEngine.Object.Instantiate(this.door[PlayerPrefs.GetInt("Door") - 1]);
        this.anim = (Animator) this.GetComponent(typeof(Animator));
        this.anim.enabled = true;
    }

}