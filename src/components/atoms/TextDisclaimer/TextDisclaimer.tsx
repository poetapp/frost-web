import * as classNames from 'classnames'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'
import './TextDisclaimer.scss'

interface TextDisclaimerProps extends ClassNameProps {}

export const TextDisclaimer = (props: TextDisclaimerProps) => (
  <div className={classNames('TextDisclaimer', props.className)}>
    <h1 className={'TextDisclaimer__title'}>API License Agreement</h1>
    <p>Last Modified: May 8, 2018</p>
    <p>
      This API License Agreement (this <strong>"Agreement"</strong>) is a binding contract between you ("you" or "your")
      and Poet Technology Limited (<strong>"Company," "we,"</strong> or <strong>"us"</strong>). This Agreement governs
      your access to and use of the Po.et API application programming interface.
    </p>
    <p>
      BY CLICKING THE "I ACCEPT" BUTTON YOU (A) ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND THIS AGREEMENT; (B)
      REPRESENT AND WARRANT THAT YOU HAVE THE RIGHT, POWER, AND AUTHORITY TO ENTER INTO THIS AGREEMENT; AND (C) ACCEPT
      THIS AGREEMENT AND AGREE THAT YOU ARE LEGALLY BOUND BY ITS TERMS. IF YOU DO NOT ACCEPT THESE TERMS, YOU MAY NOT
      ACCESS OR USE THE API.
    </p>
    <ol className={'TextDisclaimer__title__number-list'}>
      <li>
        <u>Definitions</u>
        <ol className={'TextDisclaimer__title__number-list__letter-list'}>
          <li>
            <strong>"API"</strong> means the Po.et API application programming interface
            and any API Documentation or other API materials made available by Company
            on its website located at{' '}
            <a target="_blank" href="https://explorer.poetnetwork.net/">
              explorer.poetnetwork.net
            </a>{' '}
            and{' '}
            <a target="_blank" href="https://api.poetnetwork.net/">
              api.poetnetwork.net.
            </a>
          </li>
          <li>
            <strong>"API Documentation"</strong> means the API documentation described at{' '}
            <a target="_blank" href="https://docs.poetnetwork.net/use-poet/poet-api.html">
              docs.poetnetwork.net
            </a>{' '}
            from time to time.
          </li>
          <li>
            <strong>"API Token"</strong> means the security token Company makes available for you to access the API.
          </li>
          <li>
            <strong>"Company Marks"</strong> means Company's proprietary trademarks, trade names, branding, or logos
            made available for use in connection with the API pursuant to this Agreement.
          </li>
          <li>
            <strong>"Company Offering"</strong> means the Poet network described at{' '}
            <a target="_blank" href="https://www.po.et/">
              www.po.et
            </a>{' '}
            made available by Company on a hosted basis as listed and described at{' '}
            <a target="_blank" href="https://www.po.et/">
              www.po.et.
            </a>
          </li>
          <li>
            <strong>"Your Application(s)"</strong> means web or other software services or applications developed by you
            to interact with the API.
          </li>
        </ol>
      </li>
      <li>
        <u>License Grant</u>. Subject to and conditioned on your compliance with all terms and conditions set forth in
        this Agreement, we hereby grant you a limited, revocable, non-exclusive, non-transferable, non-sublicensable
        license during the term of the Agreement to: (a) use the API solely for your internal business purposes in
        developing Your Application(s) that will communicate and interoperate with the Company Offering; and (b) display
        certain Company Marks in compliance with usage guidelines that we may specify from time to time and not in
        connection with the advertising, promotion, distribution, or sale of any other products or services. You
        acknowledge that there are no implied licenses granted under this Agreement. We reserve all rights that are not
        expressly granted. You may not use the API or any Company Mark for any other purpose without our prior written
        consent. In order to use and access the API, you must obtain an API Token through the registration process
        available at{' '}
        <a target="_blank" href="explorer.poetnetwork.net">
          explorer.po.et
        </a>. You may not share your API Token with any third party, must keep your API Token and all login information
        secure, and must use the API Token as your sole means of accessing the API. Your API Token may be revoked at any
        time by us.
      </li>
      <li>
        <u>Use Restrictions</u>. Except as expressly authorized under this Agreement, you may not:
        <ol className={'TextDisclaimer__title__number-list__letter-list'}>
          <li>
            <span />copy, modify, or create derivative works of the API, in whole or in part;
          </li>
          <li>
            <span />rent, lease, lend, sell, license, sublicense, assign, distribute, publish, transfer, or otherwise
            make available the API;
          </li>
          <li>
            <span />reverse engineer, disassemble, decompile, decode, adapt, or otherwise attempt to derive or gain
            access to any software component of the API, in whole or in part;
          </li>
          <li>remove any proprietary notices from the API;</li>
          <li>
            <span />use the API in any manner or for any purpose that infringes, misappropriates, or otherwise violates
            any intellectual property right or other right of any person, or that violates any applicable law;
          </li>
          <li>
            <span />combine or integrate the API with any software, technology, services, or materials not authorized by
            Company;
          </li>
          <li>
            <span />design or permit Your Application(s) to disable, override, or otherwise interfere with any
            Company-implemented communications to end users, consent screens, user settings, alerts, warning, or the
            like;
          </li>
          <li>
            <span />use the API in any of Your Application(s) to replicate or attempt to replace the user experience of
            the Company Offering; or
          </li>
          <li>
            <span />attempt to cloak or conceal your identity or the identity of Your Application(s) when requesting
            authorization to use the API.
          </li>
        </ol>
        You and Your Applications shall comply with all terms and conditions of this Agreement, all applicable laws,
        rules, and regulations, and all guidelines, standards, and requirements that may be posted on the network from
        time to time. In addition, you will not use the API in connection with or to promote any products, services, or
        materials that constitute, promote, or are used primarily for the purpose of dealing in spyware, adware, or
        other malicious programs or code, counterfeit goods, items subject to U.S. embargo, unsolicited mass
        distribution of email ("spam"), multi-level marketing proposals, hate materials, hacking, surveillance,
        interception, or descrambling equipment, libelous, defamatory, obscene, pornographic, abusive, or otherwise
        offensive content, stolen products, and items used for theft, hazardous materials, or any illegal activities.
      </li>
      <li>
        <u>Your Applications</u>. You agree to monitor the use of Your Applications for any activity that violates
        applicable laws, rules and regulation or any terms and conditions of this Agreement, including any fraudulent,
        inappropriate, or potentially harmful behavior, and promptly to restrict any offending users of Your
        Applications from further use of Your Applications. You agree to provide a resource for users of Your
        Applications to report abuse of Your Applications. As between you and us, you are responsible for all acts and
        omissions of your end users in connection with Your Application and their use of the API, if any. You agree that
        you are solely responsible for posting any privacy notices and obtaining any consents from your end users
        required under applicable laws, rules, and regulations for their use of Your Applications. All use by you of the
        Company Marks, if any, will comply with any usage guidelines that we may specify from time to time. You agree
        that your use of the Company Marks in connection with this Agreement will not create any right, title, or
        interest, in or to the Company Marks in favor of you and all goodwill associated with the use of the Company
        Marks will inure to the benefit of Company.
      </li>
      <li>
        <u>No Support; Updates</u>. This Agreement does not entitle you to any support for the API. You acknowledge that
        we may update or modify the API from time to time and at our sole discretion (in each instance, an{' '}
        <strong>"Update"</strong>), and may require you to obtain and use the most recent version(s). You are required
        to make any such changes to Your Applications that are required for integration as a result of such Update at
        your sole cost and expense. Updates may adversely affect how Your Applications communicate with the Company
        Offering. Your continued use of the API following an Update constitutes binding acceptance of the Update.
      </li>
      <li>
        <u>No Fees</u>. You agree that no license fees or other payments will be due under this Agreement in exchange
        for the rights granted under this Agreement. You acknowledge and agree that this fee arrangement is made in
        consideration of the mutual covenants set forth in this agreement, including, without limitation, the
        disclaimers, exclusions, and limitations of liability set forth herein. Notwithstanding the foregoing, we
        reserve the right to start charging for access to and use of the API at any time.
      </li>
      <li>
        <u>Collection and Use of Your Information</u>. We may collect certain information about you or any of your
        employees, contractors, or agents. By accessing, using, and providing information to or through the API or the
        Company Offering, you consent to all actions taken by us with respect to your information in compliance with the
        then-current version of our privacy policy and data protection requirements, available at{' '}
        <a target="_blank" href="https://www.po.et/privacy">
          www.po.et/privacy.
        </a>
      </li>
      <li>
        <u>Intellectual Property Ownership; Feedback</u>. You acknowledge that, as between you and us, (a) we own all
        right, title, and interest, including all intellectual property rights, in and to the API, the Company Offering
        and the Company Marks, and (b) you own all right, title, and interest, including all intellectual property
        rights, in and to Your Application(s), excluding the aforementioned rights in Section 8(a). You will use
        commercially reasonable efforts to safeguard the API and Company Marks (including all copies thereof) from
        infringement, misappropriation, theft, misuse, or unauthorized access. You will promptly notify us if you become
        aware of any infringement of any intellectual property rights in the API and Company Marks and will fully
        cooperate with us, in any legal action taken by us to enforce our intellectual property rights. If you or any of
        your employees, contractors, and agents sends or transmits any communications or materials to us by mail, email,
        telephone, or otherwise, suggesting or recommending changes to the API or the Company Offering, including
        without limitation, new features or functionality relating thereto, or any comments, questions, suggestions, or
        the like <strong>("Feedback")</strong>, all such Feedback is and will be treated as non-confidential. You hereby
        assign to us on your behalf, and on behalf of your employees, contractors, and agents, all right, title, and
        interest in, and we are free to use, without any attribution or compensation to you or any third party, any
        ideas, know-how, concepts, techniques, or other intellectual property rights contained in the Feedback, for any
        purpose whatsoever, although we are not required to use any Feedback.
      </li>
      <li>
        <u>Disclaimer of Warranties</u>. THE API IS PROVIDED "AS IS" AND COMPANY SPECIFICALLY DISCLAIMS ALL WARRANTIES,
        WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. COMPANY SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES OF
        MERCHANTABLITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, AND ALL WARRANTIES ARISING FROM
        COURSE OF DEALING, USAGE, OR TRADE PRACTICE. COMPANY MAKES NO WARRANTY OF ANY KIND THAT THE API OR ANY PRODUCTS
        OR RESULTS OF THE USE THEREOF, WILL MEET YOUR OR ANY OTHER PERSON'S REQUIREMENTS, OPERATE WITHOUT INTERRUPTION,
        ACHIEVE ANY INTENDED RESULT, BE COMPATIBLE OR WORK WITH ANY OF YOUR OR ANY THIRD PARTY'S SOFTWARE, SYSTEM OR
        OTHER SERVICES, OR BE SECURE, ACCURATE, COMPLETE, FREE OF HARMFUL CODE, OR ERROR-FREE, OR THAT ANY ERRORS OR
        DEFECTS CAN OR WILL BE CORRECTED.
      </li>
      <li>
        <u>Indemnification</u>. You agree to indemnify, defend, and hold harmless Company and its officers, directors,
        employees, agents, affiliates, successors, and assigns from and against any and all losses, damages,
        liabilities, deficiencies, claims, actions, judgments, settlements, interest, awards, penalties, fines, costs,
        or expenses of whatever kind, including attorneys' fees, arising from or relating to (a) your use or misuse of
        the API or Company Trademarks, (b) your breach of this Agreement, and (c) Your Applications, including any end
        user's use thereof. In the event we seek indemnification or defense from you under this provision, we will
        promptly notify you in writing of the claim(s) brought against us for which we seek indemnification or defense.
        We reserve the right, at our option and in our sole discretion, to assume full control of the defense of claims
        with legal counsel of our choice. You may not enter into any third-party agreement that would, in any manner
        whatsoever, constitute an admission of fault by us or bind us in any manner, without our prior written consent.
        In the event we assume control of the defense of such claim, we will not settle any such claim requiring payment
        from you without your prior written approval.
      </li>
      <li>
        <u>Limitations of Liability</u>. TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW, IN NO EVENT WILL WE BE
        LIABLE TO YOU OR TO ANY THIRD PARTY UNDER ANY TORT, CONTRACT, NEGLIGENCE, STRICT LIABILITY OR OTHER LEGAL OR
        EQUITABLE THEORY FOR (a) ANY LOST PROFITS, LOST OR CORRUPTED DATA, COMPUTER FAILURE OR MALFUNCTION, INTERRUPTION
        OF BUSINESS, OR OTHER SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES OF ANY KIND ARISING OUT OF THE USE
        OR INABILITY TO USE THE API; OR (b) ANY DAMAGES, IN THE AGGREGATE, IN EXCESS OF FIFTY DOLLARS EVEN IF WE HAVE
        BEEN ADVISED OF THE POSSIBILITY OF SUCH LOSS OR DAMAGES AND WHETHER OR NOT SUCH LOSS OR DAMAGES ARE FORESEEABLE
        OR COMPANY WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ANY CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO
        THIS AGREEMENT MUST BE BROUGHT WITHIN SIX MONTHS AFTER THE OCCURRENCE OF THE EVENT GIVING RISE TO SUCH CLAIM.
      </li>
      <li>
        <u>Term and Termination</u>. The term of this Agreement commences when you acknowledge your acceptance of this
        Agreement by clicking the "I ACCEPT" button and will continue in effect until terminated as set forth in this
        Section. We may immediately terminate or suspend this Agreement, any rights granted herein, and/or your licenses
        under this Agreement, in our sole discretion at any time and for any reason, by providing notice to you or
        revoking access to the API and Company Trademarks. In addition, this Agreement will terminate immediately and
        automatically without any notice if you violate any of the terms and conditions of this Agreement. You may
        terminate this Agreement at any time by ceasing your access to and use of the API and Company Trademarks. Upon
        termination of this Agreement for any reason all licenses and rights granted to you under this Agreement will
        also terminate and you must cease using, destroy, and permanently erase from all devices and systems you
        directly or indirectly control all copies of the API and Company Trademarks. Any terms that by their nature are
        intended to continue beyond the termination or expiration of this Agreement, will survive termination.
        Termination will not limit any of Company's rights or remedies at law or in equity.
      </li>
      <li>
        <u>Export Regulation</u>. The API may be subject to US export control laws, including the US Export
        Administration Act and its associated regulations. You shall not, directly or indirectly, export, re-export, or
        release the API to, or make the API accessible from, any jurisdiction or country to which export, re-export, or
        release is prohibited by law, rule, or regulation. You shall comply with all applicable federal laws,
        regulations, and rules, and complete all required undertakings (including obtaining any necessary export license
        or other governmental approval), prior to exporting, re-exporting, releasing, or otherwise making the API
        available outside the US.
      </li>
      <li>
        <u>US Government Rights</u>. The API is a "commercial item" as that term is defined at 48 C.F.R. § 2.101,
        consisting of "commercial computer software" and "commercial computer software documentation" as such terms are
        used in 48 C.F.R. § 12.212. Accordingly, if you are an agency of the US Government or any contractor therefor,
        you receive only those rights with respect to the API as are granted to all other end users under license, in
        accordance with (a) 48 C.F.R. § 227.7201 through 48 C.F.R. § 227.7204, with respect to the Department of Defense
        and their contractors, or (b) 48 C.F.R. § 12.212, with respect to all other US Government licensees and their
        contractors.
      </li>
      <li>
        <u>Modifications</u>. You acknowledge and agree that we have the right, in our sole discretion, to modify this
        Agreement from time to time. You shall be notified of modifications through changes to this license agreement.
        You will be responsible for reviewing and becoming familiar with any such modifications. However, any changes to
        the dispute resolution provisions set out in Section 17 will not apply to any disputes for which the parties
        have actual notice on or before the date the modification is made available to you.
      </li>
      <li>
        <u>Governing Law and Jurisdiction</u>. This agreement is governed by and construed in accordance with the
        internal laws of the State of Tennessee without giving effect to any choice of conflict of law provision or rule
        that would require or permit the application of the laws of any jurisdiction other than those of the State of
        Tennessee. Except as otherwise set forth herein, any legal suit, action, or proceeding arising out of or related
        to this agreement or the licenses granted hereunder will be instituted exclusively in the federal courts of the
        United States or the courts of the State of Tennessee in each case located in the city of Nashville and County
        of Davidson, and each party irrevocably submits to the exclusive jurisdiction of such courts in any such suit,
        action, or proceeding.
      </li>
      <li>
        <u>Arbitration</u>. At our sole discretion, we may require you to submit any disputes arising under this
        Agreement, including disputes arising from or concerning its interpretation, violation, invalidity,
        non-performance, or termination, to final and binding arbitration under the Rules of Arbitration of the American
        Arbitration Association applying Tennessee law.
      </li>
      <li>
        <u>Miscellaneous</u>. This Agreement constitutes the entire agreement and understanding between the parties
        hereto with respect to the subject matter hereof and supersedes all prior and contemporaneous understandings,
        agreements, representations, and warranties, both written and oral, with respect to such subject matter. Any
        notices to us must be sent to our corporate headquarters address available at: Poet, 150 3rd Avenue South, 18th
        Floor, Nashville, TN 37201, and must be delivered either in person, by certified or registered mail, return
        receipt requested and postage prepaid, or by recognized overnight courier service, and are deemed given upon
        receipt by us. Notwithstanding the foregoing, you hereby consent to receiving electronic communications from us.
        These electronic communications may include notices about applicable fees and charges, transactional
        information, and other information concerning or related to the API. You agree that any notices, agreements,
        disclosures, or other communications that we send to you electronically will satisfy any legal communication
        requirements, including that such communications be in writing. The invalidity, illegality, or unenforceability
        of any provision herein does not affect any other provision herein or the validity, legality, or enforceability
        of such provision in any other jurisdiction. Any failure to act by us with respect to a breach of this Agreement
        by you or others does not constitute a waiver and will not limit our rights with respect to such breach or any
        subsequent breaches. This Agreement is personal to you and may not be assigned or transferred for any reason
        whatsoever without our prior written consent and any action or conduct in violation of the foregoing will be
        void and without effect. We expressly reserve the right to assign this Agreement and to delegate any of its
        obligations hereunder.
      </li>
    </ol>
  </div>
)
