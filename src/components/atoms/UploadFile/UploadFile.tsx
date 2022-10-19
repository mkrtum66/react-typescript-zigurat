import React, { useState } from 'react';
import { message, Upload } from 'antd';
import { IUploadProps } from './types';
import { Label, StyledUploadButton } from './UploadFile.styled';

const UploadFile = ({ maxSize = 1000000, maxCount = 1, label = 'Upload' }: IUploadProps) => {
  const [loadingUpload, setLoadingUpload] = useState<boolean>();

  const handleChange = (info: any) => {
    if (info.file.status !== 'uploading') {
      console.log(info.file);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  const customRequest = async (req: any) => {
    setLoadingUpload(true);
    // const res = await pinFileToIpfs(req.file, metadata);
    // setValue(res.IpfsHash);
    setLoadingUpload(false);
  };
  const beforeUpload = (file: any) => {
    if (maxSize !== undefined && file.size > maxSize * 1000) {
      message.error('File must be less than ' + maxSize + 'KB');
      return Upload.LIST_IGNORE;
    }
  };

  const props = {
    name: 'file',
    maxCount: maxCount,
    action: '',
    headers: {
      authorization: 'authorization-text',
    },
    accept: 'image/png, image/gif, image/jpeg',
  };

  return (
    <Upload
      {...props}
      onChange={handleChange}
      customRequest={customRequest}
      beforeUpload={beforeUpload}
    >
      <Label>{label}</Label>
      <StyledUploadButton loading={loadingUpload}>
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="file-image"
          width="1em"
          height="1em"
          aria-hidden="true"
        >
          <path d="M553.1 509.1l-77.8 99.2-41.1-52.4a8 8 0 00-12.6 0l-99.8 127.2a7.98 7.98 0 006.3 12.9H696c6.7 0 10.4-7.7 6.3-12.9l-136.5-174a8.1 8.1 0 00-12.7 0zM360 442a40 40 0 1080 0 40 40 0 10-80 0zm494.6-153.4L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z" />
        </svg>
        <span>Upload</span>
      </StyledUploadButton>
    </Upload>
  );
};

export default UploadFile;
