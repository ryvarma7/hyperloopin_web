# 3D Model Assets

Place your 3D models in this directory.

## Recommended File Format
- `.glb` (compressed glTF binary) - recommended for best performance
- `.gltf` (glTF with separate files)

## Example Usage

In your `PodCanvas.tsx` component:

```typescript
import { useGLTF } from '@react-three/drei';

function PodModel() {
  const { scene } = useGLTF('/models/pod.glb');
  return <primitive object={scene} scale={1} rotation={[0, Math.PI, 0]} />;
}

// Preload for better performance
useGLTF.preload('/models/pod.glb');
```

## Model Guidelines
- Keep file size under 5MB for optimal loading
- Use Draco compression for larger models
- Optimize textures (max 2048x2048)
- Bake complex materials when possible

## Resources
- [glTF Viewer](https://gltf-viewer.donmccurdy.com/)
- [glTF Tools](https://github.com/KhronosGroup/glTF-Tools)
- [Draco Compression](https://github.com/google/draco)
