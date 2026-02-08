using UnityEngine;
using System.Collections;

public class OilAbsorption : MonoBehaviour
{
    public float absorptionTime = 3f; // Time taken to absorb the oil
    private bool isAbsorbing = false; // Tracks if absorption is happening
    private Renderer cleanerRenderer; // Renderer of the cleaning tool
    private Renderer oilRenderer; // Renderer of the oil spill

    private void Start()
    {
        // Get the Renderer component of the cleaning tool
        cleanerRenderer = GetComponent<Renderer>();
    }

    private void OnTriggerEnter(Collider other)
    {
        // Check if the tool touches the oil spill and absorption is not in progress
        if (other.CompareTag("OilSpill") && !isAbsorbing)
        {
            oilRenderer = other.GetComponent<Renderer>();
            StartCoroutine(AbsorbOil(other.gameObject));
        }
    }

    private IEnumerator AbsorbOil(GameObject oilSpill)
    {
        isAbsorbing = true;

        float elapsedTime = 0f;
        Vector3 originalScale = oilSpill.transform.localScale;
        Color originalColor = cleanerRenderer.material.color;
        Color oilColor = Color.black; // Color representing the absorbed oil

        // Gradually shrink the oil spill and darken the cleaning tool
        while (elapsedTime < absorptionTime)
        {
            float progress = elapsedTime / absorptionTime;

            // Shrink the oil spill
            oilSpill.transform.localScale = Vector3.Lerp(originalScale, Vector3.zero, progress);

            // Darken the cleaning tool gradually
            cleanerRenderer.material.color = Color.Lerp(originalColor, oilColor, progress);

            elapsedTime += Time.deltaTime;
            yield return null;
        }

        // Ensure the oil spill is fully absorbed
        oilSpill.transform.localScale = Vector3.zero;
        cleanerRenderer.material.color = oilColor;

        // Destroy the oil spill GameObject
        Destroy(oilSpill);

        isAbsorbing = false;
    }
}