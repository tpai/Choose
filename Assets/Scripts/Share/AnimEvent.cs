using UnityEngine;
using UnityEngine.SceneManagement;
using System.Collections;

[System.Serializable]
public partial class AnimEvent : MonoBehaviour
{
    public virtual void LoadLevel()
    {
		SceneManager.LoadScene (PlayerPrefs.GetInt ("NextLevel"));
    }

}