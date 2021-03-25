require 'spec_helper'

describe command('lsb_release -sd') do
  its(:stdout) {
    should match /^[uU]buntu.*/
  }
end

describe command('lsb_release -sc') do
  its(:stdout) {
    should match /(bionic|focal)/
  }
end

describe command('node -v') do
  its(:stdout) {
    should match /14\.17.*/
  }
end

describe command('npm -v') do
  its(:stdout) {
    should match /6\.14.*/
  }
end