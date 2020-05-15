using UnityEngine;
using UnityEngine.SceneManagement;
using System;
using System.Collections;
using System.Collections.Generic;

[Serializable]
public partial class PlayerShoot : MonoBehaviour
{
    public bool isRead;
    public bool isReading;
    public Transform paper;
    public int index;

    public virtual void Start()
    {
        this.index = PlayerPrefs.GetInt("NowStageIndex");
        Debug.Log(this.index);
    }

    public virtual void Update()
    {
        RaycastHit hit = default(RaycastHit);
        if (Input.GetKeyDown(KeyCode.E))
        {
            if (Physics.Raycast(this.transform.position, this.transform.forward, out hit, 3f))
            {
                string targetTag = hit.transform.tag;
                if (targetTag == "Paper")
                {
                    this.isRead = true;
                    this.paper = hit.transform;
                    this.ShowPaperUI(!this.isReading);
                }
                else
                {
                    if (((targetTag == "LDoor") || (targetTag == "RDoor")) || (targetTag == "BDoor"))
                    {
                        switch (targetTag)
                        {
						case "LDoor":
							PlayerPrefs.SetInt ("Door", 1);
							break;
						case "RDoor":
							PlayerPrefs.SetInt ("Door", 2);
							break;
						case "BDoor":
							PlayerPrefs.SetInt ("Door", UnityEngine.Random.Range (1, 2));
							break;
                        }
						if (this.index == (Global.stories.Count - 2))
                        {
                            PlayerPrefs.SetInt("ExitDoor", 3);
                        }
						Story story = Global.stories[this.index];
						Debug.Log((targetTag + "/") + story.answer);
                        // go to scene
						if (this.index == (Global.stories.Count - 1))
                        {
							if (targetTag == story.answer)
                            {
                                PlayerPrefs.SetInt("NextLevel", 4);
                            }
                            else
                            {
                                PlayerPrefs.SetInt("NextLevel", 3);
                            }
                        }
                        else
                        {
							if (targetTag == story.answer)
                            {
                                Debug.Log("correct");
                                // next question
                                PlayerPrefs.SetInt("NowStageIndex", PlayerPrefs.GetInt("NowStageIndex") + 1);
                                PlayerPrefs.SetInt("NextLevel", 1);
                            }
                            else
                            {
                                Debug.Log("wrong");
                                PlayerPrefs.SetInt("NextLevel", 3);
                            }
                        }
						SceneManager.LoadScene (2);
                    }
                    else
                    {
                        this.ShowPaperUI(false);
                    }
                }
            }
            else
            {
                this.ShowPaperUI(false);
            }
        }
        Debug.DrawRay(this.transform.position, this.transform.forward * 3, Color.green);
    }

    public virtual void ShowPaperUI(bool show)
    {
        this.isReading = show;
        if (this.paper != null)
        {
            this.paper.SendMessage("ShowPaperUI", show);
            this.transform.parent.SendMessage("SetControllable", !show);
        }
    }
}