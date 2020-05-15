using UnityEngine;
using UnityEngine.SceneManagement;
using System.Collections;

[System.Serializable]
public partial class Horror : MonoBehaviour
{
    public virtual IEnumerator Start()
    {
        yield return new WaitForSeconds(8f);
		SceneManager.LoadScene (0);
    }

}