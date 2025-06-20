<a href="<?=$args['url']?>"<?=$args['target_blank'] ? 'target="blank"' : ''?> class="btn">
    <?=$args['text']?>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" preserveAspectRatio="none">
       <defs>
        <filter id="distort" x="-20" y="-20" width="140" height="140" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="5" seed="2" stitchTiles="noStitch" result="turbulence" />
        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="3" xChannelSelector="R" yChannelSelector="G" result="displacementMap" />
	</filter>
    </defs>
    
    <rect id="rounded-rectangle" x="0" y="0" height="20" width="100" rx="5" filter="url(#distort)"/>
    </svg>
</a>