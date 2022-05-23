aws --profile msi cloudformation create-stack \
  --stack-name myteststack \
  --template-body file://cfn_template.yml 



aws cloudformation delete-stack --stack-name 