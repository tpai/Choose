using UnityEngine;
using System.Collections;

[System.Serializable]
public partial class Paper : MonoBehaviour
{
    public bool isReading;
    public virtual void ShowPaperUI(bool show)
    {
        Animator anim = (Animator) GameObject.Find("PaperUI").GetComponent(typeof(Animator));
        // hide paper
        ((MeshRenderer) this.GetComponent(typeof(MeshRenderer))).enabled = !show;
        // show paper ui
        anim.SetBool("show", show);
        // sfx
        if ((this.isReading && !show) || show)
        {
            this.isReading = false;
            this.GetComponent<AudioSource>().Play();
        }
        if (show)
        {
            this.isReading = true;
        }
    }

}