const React = require('react');
const THREE = require('three');

const Colors = require('../../lib/styles/Colors');
const GlobeTexture = require('./GlobeTexture.txt');
const StyledDiv = require('./StyledDiv');

const ASCII = " .:du";

const HEIGHT = 96;
const WIDTH = 96;

function reverseString(str) {
  return str.split("").reverse().join("");
}

function grayscale10(pixels) {
  var length = pixels.length;
  var gsPixels = [];
  for (var i = 0; i < length; i += 4) {
    gsPixels.push(
      Math.floor(
        (pixels[i] +
        pixels[i+1] +
        pixels[i+2]) /
        768 * ASCII.length
      )
    );
  }
  return gsPixels;
}

function asciify (val, index) {
  var br = "";
  if(
    index !== 0 && // exclude first row
    index % WIDTH === 0
  ) {
    br = "\n";
  }
  return br + ASCII[val];
}

class Globe extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
    };
    
    this._renderGlobe = this._renderGlobe.bind(this);
    this._renderRef = React.createRef();
    this._sceneRef = React.createRef();
    
    this._scene = new THREE.Scene();
    
    
    this._camera = new THREE.PerspectiveCamera(1, (WIDTH / HEIGHT), 0.1, 1000 );
    
    this._renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    this._renderer.setSize(WIDTH, HEIGHT);
    
    const texture = new THREE.TextureLoader().load(GlobeTexture['default']);
    
    const sphere = new THREE.SphereGeometry(3, 64, 48);
    this._globe = new THREE.Mesh(
      sphere,
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0x000000,
        roughness: 1,
        metalness: 1,
        map: texture
      })
    );
    this._globe.rotation.z = Math.PI;
    this._globe.rotation.y = 1.5;
    this._scene.add(this._globe);
    
    const customMaterial = new THREE.ShaderMaterial({
      uniforms:   { 
        "c":   { type: "f", value: 1.0 },
        "p":   { type: "f", value: 1.4 },
        glowColor: { type: "c", value: new THREE.Color(0xffff00) },
        viewVector: { type: "v3", value: this._camera.position }
      },
      vertexShader:   document.getElementById('vertexShader').textContent,
      fragmentShader: document.getElementById('fragmentShader').textContent,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
      transparent: false
    });  
    
    const glow = new THREE.Mesh(sphere.clone(), customMaterial.clone());
    glow.position.setX(this._globe.position.getComponent(0));
    glow.position.setY(this._globe.position.getComponent(1));
    glow.position.setZ(this._globe.position.getComponent(2));
    glow.scale.multiplyScalar(1.5);
    this._scene.add(glow);    
    
    const light0 = new THREE.PointLight( 0xffffff, 3.33, 0 );
    light0.position.set( 150, -150, 1500 );
  
    const light1 = new THREE.PointLight(0xffffff, 2, 0);
    light1.position.set(-125, 100, -500);

    this._scene.add(light0);
    this._scene.add(light1);
  
    const wireframe = new THREE.WireframeGeometry(this._globe);
    const line = new THREE.LineSegments( wireframe );
    line.material.depthTest = false;
    line.material.opacity = 1;
    line.material.transparent = true;
    this._scene.add(line);


    this._camera.position.z = 345;
  }
  
  componentDidMount() {        
    this._sceneRef.current.appendChild(this._renderer.domElement);
    const gl = this._renderer.context;
    const bufferSize = gl.drawingBufferWidth * gl.drawingBufferHeight * 4;
    this._pixels = new Uint8Array(bufferSize); 
    requestAnimationFrame(this._renderGlobe);
  }
  
  componentDidUpdate(prevProps) {
    if(!prevProps.rotate && this.props.rotate)
      requestAnimationFrame(this._renderGlobe);
  }
  
  render() {
    return (
      <StyledDiv display={'flex'}
        flexDirection={'column'}
        height={this.props.height}
        justifyContent={'center'}
        overflow={'hidden'}
        position={'relative'}        
        width={this.props.width}>
        <StyledDiv display={'none'}
          height={`${HEIGHT}px`}
          innerRef={this._sceneRef}          
          width={WIDTH} />
        <StyledDiv
          borderRadius={'100%'}
          color={Colors.PRIMARY}
          fontFamily={'"Inconsolata", monospace'}
          fontSize={'12px'}
          height={this.props.height}
          innerRef={this._renderRef}
          lineHeight={'.55em'}
          textAlign={'center'}
          whiteSpace={'pre'}
          width={this.props.width}>
        </StyledDiv>
      </StyledDiv>
    );
  }
  
  _renderGlobe() {
    if(this.props.rotate)
      requestAnimationFrame(this._renderGlobe);

    const gl = this._renderer.context;

    this._renderer.render(this._scene, this._camera);
    
    gl.readPixels(0, 0, WIDTH, HEIGHT, gl.RGBA, gl.UNSIGNED_BYTE, this._pixels);
    
    let text = grayscale10(this._pixels).map(asciify).join("");
    let lines = text.split("\n");

      
    text = lines.map(reverseString).join("\n");
      
    this._renderRef.current.innerHTML = text;
    
    this._globe.rotation.y -= 0.01;
  }
}
  
module.exports = Globe;