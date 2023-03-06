export interface IProduct {
    id: number,
    name: string,
    link: string,
    img: string,
    released: string,
    display: string,
    camera: string,
    hardware: string,
    storage: string,
    battery: string,
    os: string,
    description: string,
    brand: string,
    price: number
}


export interface IDisplay {
    id: number,
    features: string,
    refreshRate: string,
    screenToBody: string,
    size: string,
    technology: string,
}

export interface IHardware {
    id: number,
    deviceType: string,
    gpu: string,
    internalStorage: string,
    os: string,
    processor: string,
    ram: string,
    systemChip: string
}

export interface ICamera {
    id: number,
    front: string,
    mainCamera: string,
    Rear: string,
    secondCamera: string,
    videoRecording: string,
}

export interface IDesign {
    id: number,
    biometrics: string,
    colors: string,
    dimensions: string,
    keys: string,
    weight: string,
}

export interface ICellular{
    id: number,
    dataSpeed: string,
    dualSIM: string,
    fdd: string,
    tdd: string,
    simType: string,
    umts: string,
}

export interface IMultimedia {
    id: number,
    additionalMicrophone: string,
    headphones: string,
    screenMirroring: string,
    speakers: string,
}

export interface IConnectivity{
    id: number,
    bluetooth: string,
    location: string,
    other: string,
    sensors: string,
    usb: string,
    wifi: string,
}

export interface IAllProducts {
    id: number,
    name: string,
    img: string,
    released: string,
    display: string,
    camera: string,
    hardware: string,
    battery: string,
    os: string,
    description: string,
    brand: string,
    price: number,
    storage: string,
    features: string,
    refreshRate: string,
    resolution: string,
    screenToBody: string,
    size: string,
    technology: string,
    deviceType: string,
    gpu: string,
    internalStorage: string,
    processor: string,
    ram: string,
    systemChip: string,
    front: string,
    mainCamera: string,
    rear: string,
    secondCamera: string,
    videoRecording: string,
    biometrics: string,
    colors: string,
    dimensions: string,
    keys: string,
    weight: string,
    dataSpeed: string,
    dualSIM: string,
    fdd: string,
    tdd: string,
    simType: string,
    umts: string,
    additionalMicrophone: string,
    headphones: string,
    screenMirroring: string,
    speakers: string,
    bluetooth: string,
    location: string,
    other: string,
    sensors: string,
    usb: string,
    wifi: string,
}