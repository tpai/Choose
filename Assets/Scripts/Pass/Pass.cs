using UnityEngine;
using UnityEngine.SceneManagement;
using System.Collections;

[System.Serializable]
public partial class Pass : MonoBehaviour
{
    public virtual IEnumerator Start()
    {
        yield return new WaitForSeconds(6f);
		SceneManager.LoadScene (0);
    }

}