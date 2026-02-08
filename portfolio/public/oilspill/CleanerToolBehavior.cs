using UnityEngine;

public class CleanerToolBehavior : MonoBehaviour
{
    private bool isDirty = false; // Tracks if the tool is dirty
    private Renderer toolRenderer; // The Renderer component to change the color

    public Color dirtyColor = Color.black; // Color to change when the tool touches the oil spill

    void Start()
    {
        // Get the Renderer component to change the color later
        toolRenderer = GetComponent<Renderer>();
    }

    private void OnTriggerEnter(Collider other)
    {
        // If the tool touches the oil spill
        if (other.CompareTag("OilSpill") && !isDirty)
        {
            // Change the tool's color to black
            toolRenderer.material.color = dirtyColor;
            isDirty = true; // Mark the tool as dirty

            // Optional: Destroy the oil spill to simulate cleaning
            Destroy(other.gameObject);
        }

        // If the tool touches the dustbin after being dirty
        if (other.CompareTag("Dustbin") && isDirty)
        {
            // Destroy or deactivate the tool to simulate disposal
            Destroy(gameObject);
        }
    }
}
