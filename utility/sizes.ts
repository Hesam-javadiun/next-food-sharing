enum Sizes {
  SMALL = 576,
  MEDIUM = 768,
  LARGE = 992,
  XLARGE = 1200,
  XXLARGE = 1400,
}

export type SizesStateType = {
  isSmallDevice: boolean;
  isMediumDevice: boolean;
  isLargeDevice: boolean;
  isXLargeDevice: boolean;
  isXXLargeDevice: boolean;
};

class SizesUtility {

  private checkDimension(breakpoint: Sizes, deviceSize: number) {
    return deviceSize <= breakpoint;
  }

  // private createLayoutState(): SizesStateType {
  //   return {
  //     isSmall: matchMedia(`(max-width: ${Sizes.SMALL}px)`).matches,
  //     isSmallDevice: this.checkDimension(this.sizes.SMALL, width),
  //     isMediumDevice: this.checkDimension(this.sizes.MEDIUM, width),
  //     isLargeDevice: this.checkDimension(this.sizes.LARGE, width),
  //     isXLargeDevice: this.checkDimension(this.sizes.XLARGE, width),
  //     isXXLargeDevice: this.checkDimension(this.sizes.XXLARGE, width),
  //   };
  // }
  private createSizeState(): SizesStateType {
    return {
      isSmallDevice: matchMedia(`(max-width: ${Sizes.SMALL}px)`).matches,
      isMediumDevice: matchMedia(`(max-width: ${Sizes.MEDIUM}px)`).matches,
      isLargeDevice: matchMedia(`(max-width: ${Sizes.LARGE}px)`).matches,
      isXLargeDevice: matchMedia(`(max-width: ${Sizes.XLARGE}px)`).matches,
      isXXLargeDevice: matchMedia(`(max-width: ${Sizes.XXLARGE}px)`).matches,
    };
  }

  generateDeviceStatus(): () => SizesStateType {
    return this.createSizeState.bind(null);
  }
}

export default SizesUtility;
