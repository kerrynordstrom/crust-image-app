export const maxNumberOfImages = 10;
export const maxFileSize = 10000000;
export const resolutionType = 'less';
export const resolutionWidth = 5500;
export const resolutionHeight = 5500;

const humanReadableBytes = maxFileSize / 1000000

export const uploadErrorMapper = (errors) => {
  const errorType = Object.keys(errors)[0];

    const errorTranslations = {
      maxNumber: `Number of selected images exceed max number of ${maxNumberOfImages}.`,
      acceptType: "One or more of your file types is not allowed.",
      maxFileSize: `One or more of your files exceed the max file size of ${humanReadableBytes} MB.`,
      resolution: `One or more of your files exceeds the max resolution of ${resolutionWidth} W x ${resolutionHeight} H.`,
    };

    if (errorType in errorTranslations) {
    return errorTranslations[errorType] 
    } else return "An unknown error was encountered, please try again";
}