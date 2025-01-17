/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 *   Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   A copy of the License is located at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   or in the "license" file accompanying this file. This file is distributed
 *   on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *   express or implied. See the License for the specific language governing
 *   permissions and limitations under the License.
 */

import { DESTINATION_TYPE } from '../../../utils/constants';

export const URL_TYPE = {
  FULL_URL: 'url',
  ATTRIBUTE_URL: 'custom_url',
};

export const CONTENT_TYPE_KEY = 'Content-Type';

const DEFAULT_CONTENT_VALUE = 'application/json';
// TODO:: Change once we have complex forms for the URL like custom webhook
export const formikInitialValues = {
  urlType: 'url',
  name: '',
  type: 'slack',
  [DESTINATION_TYPE.SLACK]: {
    url: '',
  },
  [DESTINATION_TYPE.CHIME]: {
    url: '',
  },
  [DESTINATION_TYPE.CUSTOM_HOOK]: {
    urlType: URL_TYPE.FULL_URL,
    scheme: 'HTTPS',
    method: 'POST',
    headerParams: [
      {
        key: CONTENT_TYPE_KEY,
        value: DEFAULT_CONTENT_VALUE,
      },
    ],
    queryParams: [
      {
        key: '',
        value: '',
      },
    ],
  },
  [DESTINATION_TYPE.EMAIL]: {
    emailSender: [],
    emailRecipients: [],
  },
};
