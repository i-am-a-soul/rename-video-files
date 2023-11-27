export const downloadFile = (file: File, fileName: string) => {
  const newFile = new File([file], fileName, { type: file.type });

  const aTag = document.createElement('a');
  aTag.href = URL.createObjectURL(newFile);
  aTag.download = newFile.name;

  document.body.appendChild(aTag);
  aTag.click();
  document.body.removeChild(aTag);
};
