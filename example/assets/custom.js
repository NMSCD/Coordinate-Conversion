
hljs.highlightAll();

const voxelObj = { "voxelX": 563, "voxelY": 86, "voxelZ": 181, "solarSystemIndex": 5, "planetIndex": 1 };
const voxelString = JSON.stringify(voxelObj, null, ' ');

const portalToVoxElem = document.getElementById('portaltoVoxel');
portalToVoxElem.innerText = voxelString;

const galacticToVoxelElem = document.getElementById('galactictoVoxel');
galacticToVoxelElem.innerText = voxelString;

const voxelElem = document.getElementById('voxel');
voxelElem.value = voxelString;

const versionElem = document.getElementById('version');
const packageVersion = nmscdCoordinateConversion.getPackageVersion();
versionElem.innerHTML = `<a href="https://github.com/NMSCD/Coordinate-Conversion/tree/${packageVersion}" target="_blank" title="${packageVersion}">v${packageVersion}</a>`;

function onInputChange(
    id,
    disableInputValidation,
    createConverter,
    ...methodsToCall
) {
    const ref = document.getElementById(id);
    const helpTextElem = document.querySelector(`#${id}+.help-text`);
    let converter;

    try {
        converter = createConverter(ref.value);
    }
    catch (ex) {
        helpTextElem.innerText = ex?.toString?.();
        ref.ariaInvalid = (disableInputValidation === true) ? undefined : true;
        return;
    }

    for (const methodToCallObj of methodsToCall) {
        try {
            const convertResult = converter[methodToCallObj.method]?.();
            if (convertResult.isSuccess === false) {
                helpTextElem.innerText = convertResult.errorMessage;
                ref.ariaInvalid = (disableInputValidation === true) ? undefined : true;
                return;
            }

            const resultElem = document.getElementById(`${id}${methodToCallObj.method}`);
            if (resultElem != null) {
                const newValue = methodToCallObj.toValue(convertResult.value)
                resultElem.innerText = newValue;
            }
        }
        catch (ex) {
            helpTextElem.innerText = ex?.toString?.();
            ref.ariaInvalid = (disableInputValidation === true) ? undefined : true;
            return;
        }
    }

    helpTextElem.innerText = '';
    ref.ariaInvalid = (disableInputValidation === true) ? undefined : false;
}

function onPortalCode(disableInputValidation) {
    onInputChange(
        'portal',
        disableInputValidation,
        (portalCode) => nmscdCoordinateConversion.PortalCode({ code: portalCode }),
        {
            method: 'toGalacticCoordinates',
            toValue: (galacticValue) => galacticValue.code,
        },
        {
            method: 'toVoxel',
            toValue: (voxelValue) => JSON.stringify(voxelValue, null, '\t'),
        },
    );
}

function onGalacticCoord(disableInputValidation) {
    onInputChange(
        'galactic',
        disableInputValidation,
        (galacticCoord) => nmscdCoordinateConversion.GalacticCoordinate({ code: galacticCoord }),
        {
            method: 'toGlyph',
            toValue: (glyphValue) => glyphValue.code,
        },
        {
            method: 'toVoxel',
            toValue: (voxelValue) => JSON.stringify(voxelValue, null, '\t'),
        },
    );
}

function onVoxelCoord(disableInputValidation) {
    onInputChange(
        'voxel',
        disableInputValidation,
        (voxelCoord) => {
            return nmscdCoordinateConversion.VoxelCoordinate(JSON.parse(voxelCoord));
        },
        {
            method: 'toGlyph',
            toValue: (glyphValue) => glyphValue.code,
        },
        {
            method: 'toGalacticCoordinates',
            toValue: (galacticValue) => galacticValue.code,
        },
    );
}

onPortalCode(true);
onGalacticCoord(true);
onVoxelCoord(true);